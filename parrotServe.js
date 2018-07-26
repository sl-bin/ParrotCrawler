//--------  Server Requirements ---------//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;



//---------  App Setup and Globals ----------//
app.use(bodyParser.json());
app.use(cors());

//------------  Server Routes ------------//
//listen for post requests
app.listen('12296', () => {
  console.log('ParrotServe started!');
});


//recieve the POST search request from the frontend
app.route('/').post((req,res) => {
  var searchJSON = req.body;

  // trace statements for testing that JSON received is correct
  var searchString = JSON.stringify(searchJSON);
  console.log("Node: POST received with values: " + searchString);
  var startURL = searchJSON.url;
  var nDepth = searchJSON.n;
  var phrase = searchJSON.searchPhrase;
  var type = searchJSON.searchType;
  console.log("startURL: " + startURL);
  console.log("nDepth: " + nDepth);
  console.log("searchPhrase: " + phrase);
  console.log("searchType: " + type);

  try{
    // call the parrot crawl function
    pyParrotCrawl(res, searchJSON);
  } catch(err){
    //send that the response was not received
    res.sendStatus(500).end();
  }
});



//------------  Python-Shell Call Function ------------//
//function to call python-shell when search is received
//Takes JSON-encoded search terms: URL, depth of search, optional search phrase, and search type
//Returns web crawler results as string
function pyParrotCrawl(res, searchTerms) {
  //parse search terms out into individual variables
  var startURL = searchTerms.url;
  var nDepth = searchTerms.n;
  var phrase = searchTerms.searchPhrase;
  var type = searchTerms.searchType;

  // trace statements for testing that JSON reached pyParrotCrawl successfully
  // console.log("Node: POST received with values: " + JSON.stringify(searchTerms));
  // console.log("startURL: " + startURL);
  // console.log("nDepth: " + nDepth);
  // console.log("phrase: " + phrase);
  // console.log("type: " + type);

  //choose the right script depending which search type is specified
  var scriptToRun;
  switch(type) {
    case "BFS":
      scriptToRun = "bfs.py";
      break;
    case "RDFS":
      scriptToRun = "rdfs.py";
      break;
    case "TDFS":
      scriptToRun = "tdfs.py";
      break;
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
      args: [startURL, nDepth , phrase]
  };

  console.log("Node: Calling crawler");
  //call crawl script and pass it the search terms
  PythonShell.run(scriptToRun, options, function(err, searchRes) {
     if(err) {
       throw err;
     }
     else {
       sendResults(res, searchRes);
     }
   });
}

//------------  Send results function ------------//
function sendResults(res, sRes) {
  console.log(sRes);
  res.send(sRes).end();
}
