
var myJSON = '{"URL":"http://cultofthepartyparrot.com", "n":"3", "searchPhrase":"boom", "searchType":"TDFS"}';
var obj = JSON.parse(myJSON);
pyParrotCrawl(obj);


//------------  Python-Shell Function Call ------------//
//function to call python-shell when search is recieved
function pyParrotCrawl(searchTerms) {

  console.log("Here we are in pyParrotCrawl and the values received are: ")
  //parse search terms out into individual variables
  var startURL = searchTerms.URL;
  var nDepth = searchTerms.n;
  var phrase = searchTerms.searchPhrase;
  var type = searchTerms.searchType;

  console.log("startURL: " + startURL);
  console.log("nDepth: " + nDepth);
  console.log("searchPhrase: " + phrase);
  console.log("searchType: " + type);

  //choose the right script depending which search type is specified
  var scriptToRun = ''
  switch(type) {
    case "BFS":
      scriptToRun += "bfs.py";
      break;
    case "RDFS":
      scriptToRun += "rdfs.py";
      break;
    case "TDFS":
      scriptToRun += "dfs.py";
      break;
    }

  console.log("Here we are about to initiate python-shell, and the script to run is " + scriptToRun);
  //set up pyshell for a run
  var PythonShell = require('python-shell');

  var options = {
      mode: 'text',
      //we will need to change this depending on where python is installed
      pythonPath: '/Library/Frameworks/Python.framework/Versions/3.6/bin/python3',
      pythonOptions: ['-u'],
      //can change depending on the directory of the script
      //scriptPath: './',
      args: [startURL, nDepth , phrase]
  };

  //call crawl script and pass it the search terms
  PythonShell.run(scriptToRun, options, function(err, results) {
    if(err) {
      console.log(err);
      throw err;
    }

    console.log("Results are: %j", results);
    console.log("Script finished running");
  });

  return results;
}
