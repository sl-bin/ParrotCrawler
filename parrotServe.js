//--------  Server Requirements ---------//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;


//---------  App Setup and Globals ----------//
app.use(bodyParser.json());
app.use(cors());
//URL to post search results to
const returnURL = "https://dev.oscato.com/0ad0yts";


//------------  Server Routes ------------//
//listen on port 8000 for post requests
app.listen(4220, () => {
  console.log('ParrotServe started on port http://localhost:4220!');
});


//recieve the POST search request from the frontend
app.route('/api/search').post((req,res) => {
  var searchJSON = req.body;

  // trace statements for testing that JSON received is correct
  // var searchString = JSON.stringify(searchJSON);
  // console.log("Node: POST received with values: " + searchString);
  // var startURL = searchJSON.url;
  // var nDepth = searchJSON.n;
  // var phrase = searchJSON.searchPhrase;
  // var type = searchJSON.searchType;
  // console.log("startURL: " + startURL);
  // console.log("nDepth: " + nDepth);
  // console.log("searchPhrase: " + phrase);
  // console.log("searchType: " + type);

  //call the parrot crawl function
  try{
    pyParrotCrawl(searchJSON);
    //send that the response was received
    res.sendStatus(200).end();
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
      mode: 'text',
      //we will need to change this depending on where python interpreter is installed
      pythonPath: '/usr/local/bin/python3.7',
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
      sendResults(searchRes);
    }
  });
}


//------------  POST results function ------------//
function sendResults(sRes) {

  var client = new Client();

  // set content-type header and data as json in args parameter
  var args = {
      headers: { "Content-Type": "application/json" },
      data: sRes
  };

  client.post(returnURL, args, function (data, response) {
      // parsed response body as js object
      console.log(data);
      // raw response
      console.log(response);
      //sent data
      console.log("Search results sent were: " + sRes);
  });
}
