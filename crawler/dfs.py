# DFS Webcrawler Implementation ------------------------------------------------
#
#	To execute, use the following argument format:
#		dfs.py [ URL of starting page ] [ depth constraint ] [ user query term ]
#		Example:	dfs.py http://cultofthepartyparrot.com 2 basket
#-------------------------------------------------------------------------------

import sys
import urllib
from bs4 import BeautifulSoup
import json
import copy


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
jsonDump = {}
jsonDump['results'] = []
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

	# HTML ERROR HANDLING --- TRY / EXCEPT BLOCK --------------------------
	try:
		currentHTML = opener.open(currentURL)
	except urllib.error.HTTPError as err: print(err + "Parent site invalid."); sys.exit(2)
		# --> Handle HTTP error page data here.
		# If this error hits, it should be the starting page.
	except urllib.error.URLError: print("Parent site invalid."); sys.exit(2)
		# --> Handle URL error page data here.
		# If this error hits, it should be the starting page.

	else:
		currentURL = currentHTML.geturl()	# Update our URL in case a redirect was followed.
		currentRes = currentHTML.info()
		currentType = currentRes.get_content_type() # We only want to open text/html files.

		# Page was successfully opened --> convert to bs4 object.
		currentPage = BeautifulSoup(currentHTML.read(), "html5lib")

		# 2. COLLECT PAGE DATA:

		# --> Search for user query here <--#

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
			if item['href'] == '' or item['href'][0] == "#":
				data['links'] -= 1
				continue

			if item['href'][0] == "/":		# Append href value to parent URL, if necessary
				childURL = str(urllib.parse.urljoin(currentURL, item['href']))
				
			else:
				childURL = item['href']

			# OPEN CHILD URL

			childData = {}
			childTitle = ""

			# HTML ERROR HANDLING --- TRY / EXCEPT BLOCK --------------------------
			try:
				childHTML = opener.open(childURL)
			except urllib.error.HTTPError as err:
				# --> Handle child HTTP error page data here.
				print(err)
				isDead = 1
				childTitle = str(err)
				pass

			except urllib.error.URLError:
				# --> Handle URL error page data here.
				print("Incorrect Domain or Server Down.")
				isDead = 1
				childTitle = "Incorrect Domain/Server Down"
				pass

			# If Value Error in URL is received, try one final concatenation:
			except ValueError as err:
				try:
					childURL = str(urllib.parse.urljoin(currentURL, childURL))
					childHTML = opener.open(childURL)
				except ValueError as finalErr:
					isDead = 1
					childTitle = "Value Error: Improper/Unknown URL Format."
					pass
				except urllib.error.HTTPError as finalErr:
					# --> Handle child HTTP error page data here.
					#print(err)
					isDead = 1
					childTitle = str(err)
					pass
				except urllib.error.URLError:
					# --> Handle URL error page data here.
					#print("Incorrect Domain or Server Down.")
					isDead = 1
					childTitle = "Incorrect Domain/Server Down"
					pass
				else:
					# If our final attempt to correct the URL succeeded, import the page.
					childRes = childHTML.info()
					childType = childRes.get_content_type()
					childPage = BeautifulSoup(childHTML.read(), "html5lib")
					if childPage.title is None: childTitle = "No Title"
					else: childTitle = childPage.title.getText()
			else:
				childRes = childHTML.info()
				childType = childRes.get_content_type()

				childPage = BeautifulSoup(childHTML.read(), "html5lib")
				if childPage.title is None: childTitle = "No Title"
				else: childTitle = childPage.title.getText()
			# END OF HTML ERROR HANDLING ------------------------------------------

			# COLLECT CHILD PAGE DATA:
			childData['id'] = nextID; nextID += 1
			childData['depth'] = currentDepth + 1
			childData['title'] = childTitle

					
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

		jsonTier = {}
		jsonTier['node'] = data
		jsonTier['leaves'] = childrenData

		jsonDump['results'].append(copy.deepcopy(jsonTier))

#		jsonData = json.dumps(data)
#		jsonDump += jsonData
#		jsonDump += "\n"
#		jsonData = json.dumps(childrenData)
#		jsonDump += jsonData
#		jsonDump += "\n"

#		print(data)								# Python Dictionary Format
#		print("\n")								# Python Dictionary Format
#		for each in childrenData: print(each)	# Python Dictionary Format

		# 5. SELECT NEW LINK FROM LIST, INC DEPTH, SET UP FOR NEXT ITERATION
		if len(linkPool) < 1:
			print("0 Available links, Parrot flying home!")
			break
		else:
			currentURL = linkPool[1]['url'] # <-- Should be random assignment
			currentID = linkPool[1]['id']	# <-- Should be random assignment
			isDead = 0
			hasQuery = 0
			currentDepth += 1

print(json.dumps(jsonDump))