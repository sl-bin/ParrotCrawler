//--------  Server Requirements ---------//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//---------  App Setup and Globals ----------//
var app = express();
app.use(bodyParser.json());
app.use(cors());

var clientID = 0;
var clients = {}; // <- Keep a map of attached clients

//------------  Server Routes ------------//
//listen for post requests and server subscriptions
app.listen('15943', () => {
  console.log('ParrotServe started!');
});


//listen for client connections
app.get('/events/', function (req, res) {
	req.socket.setTimeout(2147483647);
	res.writeHead(200, {
		'Content-Type': 'text/event-stream', // <- Important headers
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
    'Access-Control-Allow-Origin' : '*'
	});
	res.write('\n');
	(function (clientID) {
		clients[clientID] = res; // <- Add this client to those we consider "attached"
		req.on("close", function () {
			delete clients[clientID]
		}); // <- Remove this client when he disconnects
	})(++clientID)
    console.log("Client connected");
});


//recieve the POST search request from the frontend
app.route('/post/').post((req,res) => {
  var searchJSON = req.body;

  try{
    // call the parrot crawl function
    res.sendStatus(200);
    pyParrotCrawl(searchJSON);
  } catch(err){
    //send that the response was not received
    res.sendStatus(500).end();
  }
});


//------------  Python-Shell Call Function ------------//
//function to call python-shell when search is received
//Takes JSON-encoded search terms: URL, depth of search, optional search phrase, and search type
//Returns web crawler results as string
function pyParrotCrawl(searchTerms) {
  //parse search terms out into individual variables
  var startURL = searchTerms.url;
  var nDepth = searchTerms.n;
  var phrase = searchTerms.searchPhrase;
  var type = searchTerms.searchType;
  var width = 0;
  var searchID = searchTerms.searchID;

  //choose the right script depending which search type is specified
  var scriptToRun;
  switch(type) {
    case "BFS":
      scriptToRun = "bfs.py";
      break;
    case "RDFS":
      scriptToRun = "rdfs.py";
      break;
    }

  // set the correct width based on searchType and nDepth
  if(scriptToRun === "rdfs.py") {
    width = 1000;
  } else {
    switch(nDepth) {
      case 1:
        width = 1000;
        break;
      case 2:
        width = 30;
        break;
      case 3:
        width = 10;
        break;
      case 4:
        width = 5;
        break;
      }
  }

  //set up pyshell for a run
  var PythonShell = require('python-shell');
  var options = {
      mode: 'json',
      //we will need to change this depending on where python interpreter is installed
      pythonPath: 'python3',
      pythonOptions: ['-u'],
      //can change depending on the directory the scripts are held in
      scriptPath: './crawler/',
      args: [startURL, nDepth , width, phrase]
  };

  console.log("Node: Calling crawler");
  //call crawl script and pass it the search terms
  PythonShell.run(scriptToRun, options, function(err, searchRes) {
     if(err) {
       throw err;
     }
     else {
			 sendBack(searchRes[0]);
     }
   });
}

//------------  Send results function ------------//
function sendBack(bod) {
  // testing trace statements
	console.log("SSEing data back to client!");
	console.log(JSON.stringify(bod));
  for (clientID in clients) {
		clients[clientID].write("data: " + JSON.stringify(bod) + "\n\n"); // <- Push a message to a single attached client
	};
}
