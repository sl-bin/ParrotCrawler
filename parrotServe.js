//--------  Server Requirements ---------//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var expressWs = require('express-ws')(app);

//---------  App Setup and Globals ----------//
app.use(bodyParser.json());
app.use(cors());
var client;

//------------  Server Routes ------------//
app.ws('/search/', function(ws, req) {
  client = ws;
  ws.on('message', function(msg) {
    var searchJSON = JSON.parse(msg);
    // call the parrot crawl function
    pyParrotCrawl(searchJSON);
  });
});


//listen for post requests and server subscriptions
app.listen('15943', () => {
  console.log('ParrotServe started!');
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
        try{
			      client.send(JSON.stringify(searchRes[0]));
        }
        catch(error){
          console.log(error);
        }
      }
   });
}
