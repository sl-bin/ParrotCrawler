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
app.route('/api/search').post((req,res) => {
  searchTerms = req.body;

  console.log("POST search request recieved with values: " + searchTerms);

  pyParrotCrawl(searchTerms);

  res.send(200, searchTerms);
});


//listen on port 8000 for requests from front end
app.listen(8000, () => {
  console.log('ParrotServe started on port http://localhost:8000!');
});


//------------  Python-Shell Function Call ------------//
//function to call python-shell when search is recieved
function pyParrotCrawl(searchTerms) {
  //parse search terms out into individual variables
  var startURL = searchTerms.URL;
  var nDepth = searchTerms.n;
  var searchPhrase = searchTerms.searchPhrase;
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
      scriptToRun = "tdfs.py";
      break;
    }

  //set up pyshell for a run
  var PythonShell = require('python-shell');
  var options = {
      mode: 'text',
      pythonPath: '/usr/bin/python3',
      pythonOptions: ['-u'],
      scriptPath: 'path to script goes here'
      args: [startURL, nDepth, searchPhrase]
  };

  //call crawl script and pass it the search terms
  PythonShell.run(scriptToRun, options, function(err, results) {
    if (err) throw err;
  });

  //get the data back out
  PythonShell.receive(data) {
    console.log("Here we are in parrotServe and the crawler results are: " + data);
  }


}
