//--------  Server Requirements ---------//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//---------  App Requirements ----------//
app.use(bodyParser.json());
app.use(cors());


//------------  App Routes ------------//
//recieve the POST search request from the frontend
app.route('/api/search/').post((req,res) => {
  var searchJSON = req.body;

  callbackCount = 0;
  var crawlResults;

  //trace statements for testing that JSON received is correct
  var searchString = JSON.stringify(searchJSON);
  console.log("Node: POST recieved with values: " + searchString);
  var startURL = searchJSON.url;
  var nDepth = searchJSON.n;
  var phrase = searchJSON.searchPhrase;
  var type = searchJSON.searchType;
  console.log("startURL: " + startURL);
  console.log("nDepth: " + nDepth);
  console.log("searchPhrase: " + phrase);
  console.log("searchType: " + type);

  //call the parrot crawl function
  pyParrotCrawl(searchJSON);

  //send that the response was received
  res.sendStatus(200);
});


//listen on port 8000 for requests
app.listen(8000, () => {
  console.log('ParrotServe started on port http://localhost:8000!');
});


//------------  Python-Shell Function Call ------------//
//function to call python-shell when search is recieved
//Takes JSON-encoded search terms: URL, depth of search, optional search phrase, and search type
//Returns web crawler results as string
function pyParrotCrawl(searchTerms) {

  //parse search terms out into individual variables
  var startURL = searchTerms.url;
  var nDepth = searchTerms.n;
  var phrase = searchTerms.searchPhrase;
  var type = searchTerms.searchType;

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
      scriptToRun = "dfs.py";
      break;
    }

  //set up pyshell for a run
  var PythonShell = require('python-shell');
  var options = {
      mode: 'text',
      //we will need to change this depending on where python is installed
      pythonPath: '/Library/Frameworks/Python.framework/Versions/3.6/bin/python3',
      pythonOptions: ['-u'],
      //can change depending on the directory of the script
      scriptPath: './crawler/',
      args: [startURL, nDepth , phrase]
  };

  console.log("Node: Calling crawler");
  //call crawl script and pass it the search terms
  PythonShell.run(scriptToRun, options, function(err, results) {
    if(err) {
      console.log(err);
      throw err;
    }
    else {
      crawlResults = results;
      complete();
    }
  });
}


//----------  Callback that will do things with the crawl results ----------//
function complete(){
  callbackCount++
  if(callbackCount > 0)
  {
    console.log("The crawler results are " + crawlResults);
  }
}
