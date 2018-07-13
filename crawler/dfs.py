# DFS Webcrawler Implementation
#
#	To execute, use the following argument format:
#		dfs.py [ URL of starting page ] [ depth constraint ] [ user query term ]
#		Example:	dfs.py http://cultofthepartyparrot.com 2 basket

import sys
import urllib
from bs4 import BeautifulSoup
#from collections import deque
import json
import copy

## Debugging Test Values ###########
#urlParam = "http://cultofthepartyparrot.com"
#depthParam = 2
#queryParam = "basket"
####################################

# VALIDATE ARGS
if len(sys.argv) < 3:
	print("\tUsage: dfs.py [starting URL] [depth] [query (optional)]")
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

# Begin Crawl

while currentDepth < targetDepth:

	# 1. LOAD PAGE
	#		Check for HTTP/URL Errors
	#		Get HTML response Content Type: We only want to load text/html links.
	try:
		currentHTML = opener.open(currentURL)
	except urllib.error.HTTPError as err: print(err)
		# --> Handle HTTP error page data here.
		# If this error hits, it should be the starting page.
	except urllib.error.URLError: print("Incorrect Domain or Server Down.")
		# --> Handle URL error page data here.
		# If this error hits, it should be the starting page.

	else:
		currentRes = currentHTML.info()
		currentType = currentRes.get_content_type()

#		print(currentHTML.status) # Debugging Statement

		# Page was successfully opened --> convert to bs4 object.
		currentPage = BeautifulSoup(currentHTML.read(), "html5lib")

		# 2. COLLECT PAGE DATA:

		# --> Search for user query here

		# Scrape links from page:
		links = currentPage.find_all("a", href=True)

		data = {}
		data['id'] = currentID
		data['depth'] = currentDepth
		data['title'] = currentPage.title.getText()
		data['url'] = currentURL
		data['dead'] = isDead
		data['found'] = hasQuery
		data['links'] = len(links)
		data['children'] = []

		# 3. PARSE SCRAPED/CHILD LINKS
		linkPool = []
		childrenData = []

		for item in links:

			isDead = 0
			hasQuery = 0

			# Make sure Child URL is properly formatted.
#			if item['href'][0] != "#" and item['href'] != "/":	# Skip/Ignore # URLs
			if item['href'] == '' or item['href'][0] == "#":
				data['links'] -= 1
				continue

			if item['href'][0] == "/":		# Append href value to parent URL, if necessary
				childURL = currentURL + item['href']
			else:
				childURL = item['href']

			# OPEN CHILD URL
			try:
				childHTML = opener.open(childURL)
			except urllib.error.HTTPError as err: print(err)
				# --> Handle child HTTP error page data here.
			except urllib.error.URLError: print("Incorrect Domain or Server Down.")
				# --> Handle URL error page data here.

			else:
				childRes = childHTML.info()
				childType = childRes.get_content_type()

#				print(childHTML.status) # Debugging Statement

				childPage = BeautifulSoup(childHTML.read(), "html5lib")

				# COLLECT CHILD PAGE DATA:
				childData = {}
				childData['id'] = nextID
				nextID += 1
				childData['depth'] = currentDepth + 1

				if childPage.title is None: childData['title'] = "No Title"
				else: childData['title'] = childPage.title.getText()
					
				childData['url'] = childURL
				childData['dead'] = isDead
				childData['found'] = hasQuery
				childData['links'] = 0
				childData['children'] = []

				# APPEND CHILD ID TO PARENT DATASET
				data['children'].append(copy.deepcopy(childData['id']))

				# APPEND CHILD TO CHILDREN DATASET:
				childrenData.append(copy.deepcopy(childData))

				# IF CHILD IS LIVE AND VALID HTML, ADD TO LINK POOL:
				if childData['dead'] == 0 and childType == "text/html": linkPool.append(copy.deepcopy(childData))

		# 4. RECORD ALL TIER DATA TO FILE AS JSON
		jsonData = json.dumps(data)
		print(jsonData)
		print("\n")
		jsonData = json.dumps(childrenData)
		print(jsonData)
		print("\n")

		# 5. SELECT NEW LINK FROM LIST, INC DEPTH, SET UP FOR NEXT ITERATION
		if len(linkPool) < 1:
			print("0 Available links, Parrot flying home!")
			break
		else:
			currentURL = linkPool[0]['url'] # <-- Should be random assignment
			currentID = linkPool[0]['id']	# <-- Should be random assignment
			isDead = 0
			hasQuery = 0
			currentDepth += 1