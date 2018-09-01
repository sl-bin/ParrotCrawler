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
import re
import string

num_threads = 20			# For multi-threading
maxSearchTime = 280			# Maximum target search time
pageLoadSpeed = 0.184815	# Average page load speed factor (seconds)

# URLs Per Page Limit Function -----------------------------------------
def getPageLimit(targetDepth, maxSearchTime, pageLoadSpeed):
	return int(( maxSearchTime / pageLoadSpeed - 1 )**(1 / targetDepth)) # Integer to return floor calculation

# Query Functions ------------------------------------------------------

# For use with the beautiful soup library. This function defines the relevant html tags to search for user queries.
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

# Incorporates the above-mentioned relevant html tags to search a given page for a given query string.
def querySearch(page, query):
	betterText = ""

	# Collect all text from relevant html tags.
	for each in page.find_all(relevant_text):
		betterText += each.get_text()

	# Search collected text for target query.
	result = betterText.find(query)
	if result >= 0: hasQuery = 1
	else: hasQuery = 0

	# Return search result
	return hasQuery



# Sort List Helper -----------------------------------------------------
def getID(item):
	return item['id']

# THREADING WORK FUNCTIONS  ---------------------------------------------

# Worker threads perform crawl/scrape operations on one URL from the work queue at a time.
def worker():
	while True:
		newPage = PagesToCrawl.get()
		crawl(newPage)
		PagesToCrawl.task_done()

# One manager thread oversees the worker threads by blocking and signaling to the main method once all queue work is complete.
def manager():
	PagesToCrawl.join()
	exit()

# CRAWL FUNCTION	----------------------------------------------------
#	Work to be performed by each worker thread	------------------------
#
#	1. Set up node data - Sets local variables and creates new default node object
#	2. Visit page 		- Opens page w/error handling and collects temp data
#	3. Assign node data - Assigns temp data to node object and scrapes/assigns child data
#	4. Append node data collected by thread to the main data set
# ----------------------------------------------------------------------
def crawl(newPage):

	global nextID 	# Threads pull unique IDs from this shared source by using the 'nextID_lock' mutex.

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
	currentHTML = None

	try:
		currentHTML = opener.open(currentURL)

	except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError):
		# --> Handle HTTP error page data here.
		currentTitle = "Invalid Page/Timeout."
		isDead = 1
	except http.client.HTTPException:
		currentTitle = "HTTP Exception"
		isDead = 1
	except http.client.IncompleteRead as e:
		currentHTML = e.partial
	except UnicodeEncodeError:
		currentTitle = "Unicode Error"
		isDead = 1

	else:
		currentURL = currentHTML.geturl()	# Update our URL in case a redirect was followed.
		currentRes = currentHTML.info()
		currentType = currentRes.get_content_type() # We only want to open text/html files.

		# Page was successfully opened --> convert to bs4 object and collect initial data.
		currentPage = BeautifulSoup(currentHTML.read().decode('utf-8', 'ignore'), "lxml")
		if currentPage.title is None: currentTitle = "No Title"
		else: currentTitle = currentPage.title.getText()
		if queryParam: hasQuery = querySearch(currentPage, queryParam)

	# END OF HTML ERROR HANDLING ---------------------------------------------

	# 3. ASSIGN PARENT NODE DATA, INCLUDING CHILD URLS

	parentNode['title'] = currentTitle
	parentNode['url'] = currentURL	# <-- Update URL in case of redirect
	parentNode['found'] = hasQuery
	parentNode['dead'] = isDead

	# Collect child URL data if page is readable and we are not yet at the target depth.
	# If we are at target depth OR page is dead, there is no reason to collect child URL data.
	if isDead != 1 and currentDepth < targetDepth:
		links = currentPage.find_all("a", href=True)

		currentWidth = 0
		for link in links:
			if currentWidth < URLsPerPageLimit:
				# Check URL: <-- THIS NEEDS WORK
				if link['href'] == '' or link['href'][0] == "#":
					continue

				else:
					childURL = str(urllib.parse.urljoin(currentURL, link['href']))

				# If the child URL is identical to its parent, skip it.
				if childURL == currentURL: continue

				# Take/Assign a unique ID using mutex:
				thisNextID = 0
				with nextID_lock:
					thisNextID = nextID
					nextID += 1

				# Assign ID, add child URL to queue.
				PagesToCrawl.put( copy.deepcopy( (thisNextID, currentDepth+1, childURL) ) )
				# Add child ID to node data
				parentNode['children'].append(copy.deepcopy(thisNextID))
				parentNode['links'] += 1
				# Increment the current width
				currentWidth += 1


		currentPage.decompose()					# Manual garbage collection
	if currentHTML != None: currentHTML.close()	# Manual garbage collection


	# 4. APPEND NODE DATA TO RESULT SET
	# Once thread data collection is complete, use mutex to add it to the main data set.
	with data_lock:
		data['results'].append(copy.deepcopy(parentNode))



# MAIN ---------------------------------------------------------------

# VALIDATE ARGS ------------------------------------------------------

# Usage Statement ----------------------------------------------------
if len(sys.argv) < 4:
	print("\tUsage: bfs.py [starting URL] [depth] [page-limit] [(query)]")
	print("\t***Set [page-limit] to 0 to default to standard formula.***")
	sys.exit(2)

# Assign preliminary arguments ---------------------------------------
startingURL = str(sys.argv[1])
targetDepth = int(sys.argv[2])
pageLimit = int(sys.argv[3])
if len(sys.argv) < 5: queryParam = None
else: queryParam = str(sys.argv[4])

# Determine page limit from user input (and forumla if necessary)
if pageLimit == 0:
	URLsPerPageLimit = getPageLimit(targetDepth, maxSearchTime, pageLoadSpeed)
else: URLsPerPageLimit = pageLimit
# print("URL Limit is: {}".format(URLsPerPageLimit))	# DEBUG

# Set URL Opener - assign valid user-agent
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
#opener.addheaders = [('User-agent', 'parrot-bot (http://parrotcrawl.webfactional.com')]

# Set up thread locks/mutexes
nextID_lock = threading.Lock()
data_lock = threading.Lock()

nextID = 1	# Inter-thread variable to ensure unique IDs for each page visited

# Set up main dataset. (Refer to documentation.txt for layout of JSON data)
data = {}

data['input'] = {}
data['input']['url'] = startingURL
data['input']['n'] = targetDepth
data['input']['type'] = "bfs"
data['input']['search'] = queryParam

data['dimensions'] = {}
data['dimensions']['height'] = 1
data['dimensions']['width'] = 1

data['results'] = []

# BEGIN CRAWLER --------------------------------------------------------------

time0 = time.time()				# Start stopwatch

# Add starting page to queue of URLs to crawl (as a tuple: (id, depth, "url"))
PagesToCrawl = Queue()
PagesToCrawl.put( (0, 0, startingURL) )

# Set Up/Start Threads

# Manager Thread - Watches work queue, takes locking system call and dies once work is complete
terminator = threading.Thread(target=manager)
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

# Multi-threading may result in out-of-order nodes: sort by key ID
data['results'].sort(key=getID)

# Output Data Set
print(json.dumps(data))

time1 = time.time()						# Stop stopwatch
#print("Total time: ", time1-time0)		# Show timing

#-----------------------------------------------------------------------------
