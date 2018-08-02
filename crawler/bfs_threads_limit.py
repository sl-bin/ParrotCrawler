#!/usr/bin/python3
import time
import threading
from queue import Empty
from queue import Queue

import http
import sys
import urllib.request
from bs4 import BeautifulSoup
import json
import copy

num_threads = 20
widthLimit = 20 # Max number of child links to be collected from any parent

# Sort List Helper
def getID(item):
	return item['id']

# THREADING WORK FUNCTION  ---------------------------------------------

def worker():
	while True:
		try:
			newPage = PagesToCrawl.get()
		except Empty:
			print("My queue is empty!")
			break
		else:
			crawl(newPage)
			PagesToCrawl.task_done()
	print("Thread leaving!")


# CRAWLER FUNCTION	----------------------------------------------------
#	Thread Work  	----------------------------------------------------
def crawl(newPage):

	global nextID, maxWidth

#	while len(PagesToCrawl) > 0 and PagesToCrawl[0][1] <= targetDepth:

		# 1. POP FRONT OF QUEUE AS NEXT PAGE TO VISIT, SET UP NODE DATA
#		newPage = PagesToCrawl.get()

		# Set local thread variables
	currentID = newPage[0]
	currentDepth = newPage[1]
	currentURL = newPage[2]
	isDead = 0
	hasQuery = 0

	parentNode = {}
	parentNode['id'] = currentID
	parentNode['depth'] = newPage[1]
	parentNode['title'] = ""
	parentNode['url'] = currentURL
	parentNode['dead'] = 0
	parentNode['found'] = 0
	parentNode['links'] = 0
	parentNode['children'] = []

	# 2. VISIT PAGE

	# HTML ERROR HANDLING -----------------------------------------------------

	try:
		currentHTML = opener.open(currentURL)

#	except (KeyboardInterrupt, SystemExit):
#		raise
#	except:
#		currentTitle = "Invalid Page/Timeout"
#		isDead = 1

	except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError):
		# --> Handle HTTP error page data here.
		currentTitle = "Invalid Page/Timeout."
		isDead = 1
	except http.client.HTTPException:
		currentTitle = "HTTP Exception"
		isDead = 1

	else:
		currentURL = currentHTML.geturl()	# Update our URL in case a redirect was followed.
		currentRes = currentHTML.info()
		currentType = currentRes.get_content_type() # We only want to open text/html files.

		# Page was successfully opened --> convert to bs4 object.
		currentPage = BeautifulSoup(currentHTML.read(), "lxml")
		if currentPage.title is None: currentTitle = "No Title"
		else: currentTitle = currentPage.title.getText()

	# END OF HTML ERROR HANDLING ---------------------------------------------

	# 3. COLLECT NODE DATA, INCLUDING CHILD URLS

	# --> Search for user query here <--#

	parentNode['title'] = currentTitle
	parentNode['url'] = currentURL	# <-- Update URL in case of redirect
	parentNode['found'] = hasQuery
	parentNode['dead'] = isDead

	# --> If we are at target depth OR page is dead, we don't want to collect child URL data.
	if isDead != 1 and currentDepth < targetDepth:
		links = currentPage.find_all("a", href=True)
		#parentNode['links'] = len(links)

		currentWidth = 0
		for link in links:
			if currentWidth < widthLimit:
				# Check URL:
				if link['href'] == '' or link['href'][0] == "#":
			#		parentNode['links'] -= 1
					continue
				else:
					childURL = str(urllib.parse.urljoin(currentURL, link['href']))

				if childURL == currentURL: continue

				# Take next ID:
				thisNextID = 0
				with nextID_lock:
					thisNextID = nextID
					nextID += 1

				# Assign ID, add to queue.
				PagesToCrawl.put( copy.deepcopy( (thisNextID, currentDepth+1, childURL) ) )
				# Add child ID to node data
				parentNode['children'].append(copy.deepcopy(thisNextID))
				# Increment width
				currentWidth += 1
				parentNode['links'] += 1

		with maxWidth_lock:
			if currentWidth > maxWidth: maxWidth = currentWidth

	# APPEND NODE DATA TO RESULT SET
	with data_lock:
		data['results'].append(copy.deepcopy(parentNode))



# MAIN ---------------------------------------------------------------


# VALIDATE ARGS ------------------------------------------------------
if len(sys.argv) < 3:
	print("\tUsage: bfs.py [starting URL] [depth] [query (optional)]")
	sys.exit(2)

URLParam = str(sys.argv[1])
targetDepth = int(sys.argv[2])
if len(sys.argv) < 4: queryParam = None
else: queryParam = str(sys.argv[3])


# Set URL Opener - assign valid user-agent to prevent bot detection
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]

# THREAD LOCKS
nextID_lock = threading.Lock()
maxWidth_lock = threading.Lock()
data_lock = threading.Lock()

nextID = 1
maxWidth = 0

# Set up dataset:
data = {}

data['input'] = {}
data['input']['url'] = URLParam
data['input']['n'] = targetDepth
data['input']['type'] = "bfs"
data['input']['search'] = queryParam

data['dimensions'] = {}
data['dimensions']['height'] = 1
data['dimensions']['width'] = 0

data['results'] = []

# BEGIN CRAWLER --------------------------------------------------------------

time0 = time.time()

# Add starting page to queue of URLs to crawl (as a tuple: (id, depth, "url"))
PagesToCrawl = Queue()
PagesToCrawl.put( (0, 0, URLParam) )

threads = []
# Start Threads Here
for x in range(num_threads):
	t = threading.Thread(target=worker)
	t.daemon = True
	threads.append(t)
	t.start()

# Block until all threads have finished crawling URLs in queue
PagesToCrawl.join()

#for thread in threads:
#	thread.join(300)
#print("All threads have joined.")


# Append Final Info to Data Set
data['dimensions']['height'] = data['results'][-1]['depth'] + 1
data['dimensions']['width'] = maxWidth

data['results'].sort(key=getID)

# Output Data Set
print(json.dumps(data))

time1 = time.time()
print("Total time: ", time1-time0)

#-----------------------------------------------------------------------------
