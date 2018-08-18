#!/usr/bin/python3
import time
import threading
from queue import Empty
from queue import Queue
import random
import http
import sys
import urllib.request
from bs4 import BeautifulSoup
import json
import copy
import re
import string

numThreads = 20
random.seed

# Sort List Helper -----------------------------------------------------
def getID(item):
	return item['id']

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

	# THREADING WORK FUNCTIONS  ---------------------------------------------

def worker():
	global linkPool

	while terminator.is_alive():
		HTML = None
		page = None
		newTask = PagesToCrawl.get()		# Get next work task.
		node = createNodeFromTuple(newTask)	# Create new node.
		HTML = openURLAsHTML(node)			# Open URL.
		if node['dead'] == 0:				# If URL is live...
			page = BeautifulSoup(HTML.read().decode('utf-8', 'ignore'), "lxml")	# ...scrape data.
			scrapeNodeData(node, page)

		# If the page is live and gave a valid text/html response, it should be an option for the next parent.
		if node['dead'] == 0 and HTML.info().get_content_type() == "text/html":
			with pool_lock: linkPool.append(copy.deepcopy(newTask))

		# Garbage Collection
		if HTML != None: HTML.close()
		if page != None: page.decompose()

		# With lock in place, append result to temporary data set.
		with tier_lock:
			tierResults.append(copy.deepcopy(node))


		PagesToCrawl.task_done()	# Tell manager that task is complete.
	sys.exit()

def manager():
	PagesToCrawl.join()
	sys.exit()


def scrapeNodeData(node, page):
	if page.title is None: node['title'] = "No Title"	# Assign Title
	else: node['title'] = page.title.getText()
	if queryParam: node['found'] = querySearch(page, queryParam)	# Assign Query


# Creates and returns a new node entry from tuple data.
def createNodeFromTuple(newEntry):
	node = {}
	node['id'] = newEntry[0]
	node['depth'] = newEntry[1]
	node['title'] = ""
	node['url'] = newEntry[2]
	node['dead'] = 0
	node['found'] = 0
	node['links'] = 0
	node['children'] = []
	return node


# Attempts to open URL as an HTML page, returning HTML result.
def openURLAsHTML(node):
	try:
		HTML = opener.open(node['url'])

	except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError):
		# --> Handle HTTP error page data here.
		node['title'] = "Invalid Page/Timeout."
		node['dead'] = 1
		return None

	except http.client.HTTPException:
		node['title'] = "HTTP Exception"
		node['dead'] = 1
		return None

	except UnicodeEncodeError:
		node['title'] = "Unicode Error"
		node['dead'] = 1
		return None

	except http.client.IncompleteRead as e:
		HTML = e.partial

	else:
		if HTML.info().get_content_type() != "text/html":
			node['title'] = "Non-HTML Link"
			node['dead'] = 1

		node['url'] = HTML.geturl()		# Update our URL in case of redirect.
		return HTML

def appendFinalDimensions(data, greatestWidth):
	data['dimensions']['height'] = data['results'][-1]['depth'] + 1

	data['dimensions']['width'] = greatestWidth

#	for each in data['results']:
#		if each['links'] > 0:
#			data['dimensions']['width'] += each['links'] - 1

# MAIN ---------------------------------------------------------------


# VALIDATE ARGS ------------------------------------------------------
if len(sys.argv) < 4:
	print("\tUsage: rdfs.py [starting URL] [depth] [page-limit] [(query)]")
	print("\t***Set [page-limit] to 0 for no limit.***")
	sys.exit(2)

URLParam = str(sys.argv[1])
depthParam = int(sys.argv[2])
pageLimit = int(sys.argv[3])
if len(sys.argv) < 5: queryParam = None
else: queryParam = str(sys.argv[4])

if pageLimit == 0: pageLimit = float('Infinity')

# Set URL Opener - assign valid user-agent to prevent bot detection
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]

# THREAD LOCK
tier_lock = threading.Lock()
pool_lock = threading.Lock()

nextID = 1	# For unique ID assignment
greatestWidth = 1

# Set up dataset:
data = {}

data['input'] = {}
data['input']['url'] = URLParam
data['input']['n'] = depthParam
data['input']['type'] = "rdfs"
data['input']['search'] = queryParam

data['dimensions'] = {}
data['dimensions']['height'] = 1
data['dimensions']['width'] = 1

data['results'] = []

# BEGIN CRAWLER --------------------------------------------------------------

#time0 = time.time()		#DEBUG:	TIMING

# Assign starting URL as a Queue tuple
currentParentTuple = (0, 0, URLParam)		# URLs to crawl are tuples: (id, depth, "url")
parentNode = createNodeFromTuple(currentParentTuple)
parentHTML = openURLAsHTML(parentNode)
if parentNode['dead'] == 1:
	#-------> User-Given Page is Dead: Append and Exit <--------
	data['results'].append(copy.deepcopy(parentNode))
	appendFinalDimensions(data, greatestWidth)
	print(json.dumps(data))
	sys.exit()

# Scrape initial node data
parentPage = BeautifulSoup(parentHTML.read().decode('utf-8', 'ignore'), "lxml")		# Create Page
scrapeNodeData(parentNode, parentPage)

# Append initial node to data set
data['results'].append(copy.deepcopy(parentNode))

# While the depth constraint has not yet been satisfied...
while currentParentTuple[1] < depthParam:

	parentID = currentParentTuple[0]
	parentURL = currentParentTuple[2]

	# 1. SCRAPE CHILDREN --------------------------------------------------------
	links = parentPage.find_all("a", href=True)

	PagesToCrawl = Queue()

	# 2. ADD VALID CHILD LINKS TO THREADING QUEUE -------------------------------
	amountOfWork = 0
	for link in links:
		if amountOfWork < pageLimit:
			# Validate URL:
			if link['href'] == '' or link['href'][0] == "#":
				continue
			else:
				childURL = str(urllib.parse.urljoin(parentURL, link['href']))
			if childURL == parentURL: continue

			# Assign to Queue
			PagesToCrawl.put( (nextID, data['results'][parentID]['depth'] + 1, childURL) )
			data['results'][parentID]['links'] += 1
			# Add to parent's children
			data['results'][parentID]['children'].append(copy.deepcopy(nextID))
			nextID += 1		# Increment ID after assignment
			amountOfWork += 1

	if amountOfWork > greatestWidth: greatestWidth = amountOfWork

	# 3. SCATTER/GATHER CHILDREN URLS - MULTI-THREADING
	#------ Threading -----------------------------------------------------------

	linkPool = []		# Holds only the VALID child urls in tuple form for 'next parent' selection
	tierResults = []	# Holds all scraped node data on a single depth tier

	# Terminator/Manager Thread - Watches work queue, takes locking system call
	terminator = threading.Thread(target=manager)
	terminator.daemon = True
	terminator.start()

	# Worker Thread Pool - Loads/Scrapes pages from URLS in work queue
	threads = []
	for x in range(numThreads):
		t = threading.Thread(target=worker)
		t.daemon = True
		threads.append(t)
		t.start()

	# Block until all threads have finished crawling URLs in queue
	while terminator.is_alive():
		time.sleep(2)


	# 5. ORGANIZE RESULTS -------------------------------------------------------

#	print("linkPool length = " + str(len(linkPool)))	#DEBUG

	# SORT TIER RESULTS
	tierResults.sort(key=getID)

	# Select node to be next parent
	if len(linkPool) < 1:	# If there are no links to select...
		break				# Break crawl loop: we are done.

	# Otherwise, there are links to select...
	r = random.randint(0, len(linkPool)-1)
	nextParent = linkPool[r] 	# Select a random, valid link to follow.

	# APPEND TIER TO DATA RESULTS
	for item in tierResults:
		data['results'].append(copy.deepcopy(item))

	# SWAP FIRST TIER ENTRY WITH NEW PARENT FOR FRONT-END PARSING
	swapID1 = tierResults[0]['id']
#	print("ID 1 = " + str(swapID1))		#DEBUG
	swapID2 = nextParent[0]
#	print("ID 2 = " + str(swapID2))		#DEBUG

	data['results'][swapID1]['id'], data['results'][swapID2]['id'] = data['results'][swapID2]['id'], data['results'][swapID1]['id']
	data['results'][swapID1], data['results'][swapID2] = data['results'][swapID2], data['results'][swapID1]

	# 6. SET UP FOR NEXT ITERATION
	currentParentTuple = (swapID1, data['results'][swapID1]['depth'], data['results'][swapID1]['url'])

#	print('Next parent will be...')		#DEBUG
#	print(currentParentTuple)			#DEBUG
#	print("\n")							#DEBUG

	if parentHTML != None: parentHTML.close()	# Garbage Collection
	parentPage.decompose()						# Garbage Collection

	parentHTML = openURLAsHTML(data['results'][currentParentTuple[0]])
	if parentHTML == None: break
	parentPage = BeautifulSoup(parentHTML.read().decode('utf-8', 'ignore'), "lxml")


# APPEND FINAL INFO TO DATA SET ----------------------------------------------
appendFinalDimensions(data, greatestWidth)

# Output Data Set
print(json.dumps(data))

#time1 = time.time()				#DEBUG:	TIMING
#print("Total time: ", time1-time0)	#DEBUG:	TIMING

#-----------------------------------------------------------------------------
