//--------  Server Requirements ---------//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let  expressWs = require('express-ws')(app);

//---------  App Setup and Globals ----------//
app.use(bodyParser.json());
app.use(cors());
let  client;

//------------  Server Routes ------------//
//route to accept a websocket request
app.ws('/search/', function(ws, req) {
  client = ws;
  //when search terms are recieved from the client
  ws.on('message', function(msg) {
    let  searchJSON = JSON.parse(msg);
    // call the parrot crawl function
    pyParrotCrawl(searchJSON);
  });
});



//listen for incoming websocket connections
app.listen('15943', () => {
  console.log('ParrotServe started!');
});


//------------  Python-Shell Call Function ------------//
//function to call python-shell when search is received
//Takes JSON-encoded search terms: URL, depth of search, optional search phrase, and search type
//Returns web crawler results as string
function pyParrotCrawl(searchTerms) {
  //parse search terms out into individual variables
  let  startURL = searchTerms.url;
  let  nDepth = searchTerms.n;
  let  phrase = searchTerms.searchPhrase;
  let  type = searchTerms.searchType;
  let  width = 0;
  let  searchID = searchTerms.searchID;

  //choose the right script depending which search type is specified
  let  scriptToRun;
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
  let  PythonShell = require('python-shell');
  let  options = {
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
     // if the script errors out, send why to the client
     if(err) {
       client.send(JSON.stringify(err));
       throw err;
     }
     //otherwise try to send the results
     else {
       try{
         console.log("Node: search results are");
         console.log(JSON.stringify(searchRes[0]));
         client.send(JSON.stringify(searchRes[0]));
       }
      //if the client is disconnected, terminate the python script
       catch(err){
         console.log("Client disconnected. Terminating script");
         console.log(err);
       }
     }
   });
}
