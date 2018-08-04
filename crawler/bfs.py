#!/usr/bin/python3
import time
import threading
from queue import Empty
from queue import Queue

import http
import sys
import urllib.request
#import urllib.robotparser
from bs4 import BeautifulSoup
import json
import copy
import re
import string

num_threads = 20
maxSearchTime = 280 # Seconds
pageLoadSpeed = 0.184815	# Average page load speed (seconds)

# URLs Per Page Limit Function -----------------------------------------
def getPageLimit(targetDepth, maxSearchTime, pageLoadSpeed):
	return int(( maxSearchTime / pageLoadSpeed - 1 )**(1 / targetDepth)) # Integer to return floor calculation

# Query Functions ------------------------------------------------------
def relevant_text(tag):
	return	tag.name == "title" or\
			tag.name == "p" or\
			tag.name == "div" or\
			tag.name == "span" or\
			tag.name == "h1" or\
			tag.name == "h2" or\
			tag.name == "h3" or\
			tag.name == "h4" or\
			tag.name == "h5" or\
			tag.name == "h6"

def querySearch(page, query):
	betterText = ""
	for each in page.find_all(relevant_text):
		betterText += each.get_text()

	# Can be deleted after testing/verification of return text.
	#newText = betterText.replace("\n", " ")
	#print(newText)

	result = betterText.find(query)
	if result >= 0: hasQuery = 1
	else: hasQuery = 0

	return hasQuery



# Sort List Helper -----------------------------------------------------
def getID(item):
	return item['id']

# THREADING WORK FUNCTION  ---------------------------------------------

def worker():
	while True:
		newPage = PagesToCrawl.get()
		crawl(newPage)
		PagesToCrawl.task_done()

def terminator():
	PagesToCrawl.join()
	exit()

# CRAWLER FUNCTION	----------------------------------------------------
#	Thread Work  	----------------------------------------------------
def crawl(newPage):

	global nextID

		# 1. SET UP NODE DATA

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

		# Page was successfully opened --> convert to bs4 object and collect data.
		currentPage = BeautifulSoup(currentHTML.read(), "lxml")
		if currentPage.title is None: currentTitle = "No Title"
		else: currentTitle = currentPage.title.getText()
		if queryParam: hasQuery = querySearch(currentPage, queryParam)

	# END OF HTML ERROR HANDLING ---------------------------------------------

	# 3. ASSIGN PARENT NODE DATA, INCLUDING CHILD URLS

	parentNode['title'] = currentTitle
	parentNode['url'] = currentURL	# <-- Update URL in case of redirect
	parentNode['found'] = hasQuery
	parentNode['dead'] = isDead

	# --> If we are at target depth OR page is dead, we don't want to collect child URL data.
	if isDead != 1 and currentDepth < targetDepth:
		links = currentPage.find_all("a", href=True)

		currentWidth = 0
		for link in links:
			if currentWidth < URLsPerPageLimit:
				# Check URL:
				if link['href'] == '' or link['href'][0] == "#":
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

URLsPerPageLimit = getPageLimit(targetDepth, maxSearchTime, pageLoadSpeed)
print("URL Limit is: {}".format(URLsPerPageLimit))	# Max number of child links to be collected from any parent

# Set URL Opener - assign valid user-agent to prevent bot detection
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
#opener.addheaders = [('User-agent', 'rudeparrot-bot (http://parrotcrawl.webfactional.com')]

# THREAD LOCKS
nextID_lock = threading.Lock()
data_lock = threading.Lock()

# INTER-THREAD VARIABLE
nextID = 1

# Set up dataset:
data = {}

data['input'] = {}
data['input']['url'] = URLParam
data['input']['n'] = targetDepth
data['input']['type'] = "bfs"
data['input']['search'] = queryParam

data['dimensions'] = {}
data['dimensions']['height'] = 1
data['dimensions']['width'] = 1

data['results'] = []

# BEGIN CRAWLER --------------------------------------------------------------

time0 = time.time()

# Add starting page to queue of URLs to crawl (as a tuple: (id, depth, "url"))
PagesToCrawl = Queue()
PagesToCrawl.put( (0, 0, URLParam) )

# Set Up/Start Threads

# Terminator Thread - Watches work queue, takes locking system call
terminator = threading.Thread(target=terminator)
terminator.daemon = True

# Worker Thread Pool
threads = []
for x in range(num_threads):
	t = threading.Thread(target=worker)
	t.daemon = True
	threads.append(t)
	t.start()

# Block until all threads have finished crawling URLs in queue
terminator.start()

while terminator.is_alive():
	time.sleep(2)

# Append Final Info to Data Set
data['dimensions']['height'] = data['results'][-1]['depth'] + 1

for each in data['results']:
	if each['links'] > 0:
		data['dimensions']['width'] += each['links'] - 1

data['results'].sort(key=getID)

# Output Data Set
print(json.dumps(data))

time1 = time.time()
print("Total time: ", time1-time0)

#-----------------------------------------------------------------------------
