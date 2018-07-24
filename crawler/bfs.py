#!/usr/bin/python3
import sys
import urllib.request
from bs4 import BeautifulSoup
import json
import copy
from collections import deque

# VALIDATE ARGS
if len(sys.argv) < 3:
	print("\tUsage: bfs.py [starting URL] [depth] [query (optional)]")
	sys.exit(2)

URLParam = str(sys.argv[1])
depthParam = int(sys.argv[2])
if len(sys.argv) < 4: queryParam = None
else: queryParam = str(sys.argv[3])

# Set URL Opener - assign valid user-agent to prevent bot detection
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]

# Assign starting values
nextID = 1
currentID = 0
currentURL = URLParam
currentDepth = 0
targetDepth = depthParam
isDead = 0
hasQuery = 0
maxWidth = 0

# Set up dataset:
data = {}

data['input'] = {}
data['input']['url'] = currentURL
data['input']['n'] = targetDepth
data['input']['type'] = "DFSrand"
data['input']['search'] = queryParam

data['dimensions'] = {}
data['dimensions']['height'] = 1
data['dimensions']['width'] = 0

data['results'] = []

#CRAWLER --------------------------------------------------------------------

# Add starting page to queue of URLs to crawl (as a tuple: (id, depth, "url"))
PagesToCrawl = deque()
PagesToCrawl.append( (currentID, currentDepth, currentURL) )

while len(PagesToCrawl) > 0 and PagesToCrawl[0][1] <= targetDepth:

	# 1. POP FRONT OF QUEUE AS NEXT PAGE TO VISIT, SET UP NODE DATA
	newPage = PagesToCrawl.popleft()

	currentID = newPage[0]
	currentDepth = newPage[1]
	currentURL = newPage[2]

	parentNode = {}
	parentNode['id'] = currentID
	parentNode['depth'] = newPage[1]
	parentNode['title'] = ""
	parentNode['url'] = currentURL
	parentNode['dead'] = 0
	parentNode['found'] = 0
	parentNode['links'] = 0
	parentNode['children'] = []

	# APPEND NODE DATA TO RESULT SET
	data['results'].append(copy.deepcopy(parentNode))

	# 2. VISIT PAGE

	# HTML ERROR HANDLING -----------------------------------------------------
	try:
		currentHTML = opener.open(currentURL)
	except urllib.error.HTTPError as err:
		# --> Handle HTTP error page data here.
		currentTitle = "Parent site invalid."
		isDead = 1
		

	except urllib.error.URLError:
		# --> Handle URL error page data here.
		currentTitle = "Parent site invalid."
		isDead = 1

	else:
		currentURL = currentHTML.geturl()	# Update our URL in case a redirect was followed.
		currentRes = currentHTML.info()
		currentType = currentRes.get_content_type() # We only want to open text/html files.

		# Page was successfully opened --> convert to bs4 object.
		currentPage = BeautifulSoup(currentHTML.read(), "html5lib")
		if currentPage.title is None: currentTitle = "No Title"
		else: currentTitle = currentPage.title.getText()

	# END OF HTML ERROR HANDLING ---------------------------------------------

	# 3. COLLECT NODE DATA, INCLUDING CHILD URLS

	# --> Search for user query here <--#

	data['results'][currentID]['title'] = currentTitle
	data['results'][currentID]['url'] = currentURL	# <-- Update URL
	data['results'][currentID]['found'] = hasQuery
	data['results'][currentID]['dead'] = isDead

	# --> If we are at target depth OR page is dead, we don't want to collect child URL data.
	if isDead != 1 or currentDepth != targetDepth:
		links = currentPage.find_all("a", href=True)
		data['results'][currentID]['links'] = len(links)

		currentWidth = 1	# <-- Account for parent node already in dataset
		for link in links:
			# Check URL:
			if link['href'] == '' or link['href'][0] == "#":
				data['results'][currentID]['links'] -= 1
				continue
			else:
				childURL = str(urllib.parse.urljoin(currentURL, link['href']))

			# Assign ID, add to queue.
			PagesToCrawl.append( copy.deepcopy( (nextID, currentDepth+1, childURL) ) )
			# Add child ID to node data
			data['results'][currentID]['children'].append(copy.deepcopy(nextID))
			# Increment ID & width
			nextID += 1
			currentWidth += 1

		if currentWidth > maxWidth: maxWidth = currentWidth

	# 4. RESET VARS FOR NEXT ITERATION
	isDead = 0
	hasQuery = 0


data['dimensions']['height'] = currentDepth + 1
data['dimensions']['width'] = maxWidth

# print("Hello from before json dump!")
print(json.dumps(data))
