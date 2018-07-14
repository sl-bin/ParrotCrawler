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
  console.log("here I am in node having just received the request");
  var searchJSON = req.body;

  //for testing that JSON received is correct
  var searchString = JSON.stringify(searchJSON);
  console.log("POST search request recieved with values: " + searchString);

  var startURL = searchJSON.URL;
  var nDepth = searchJSON.n;
  var phrase = searchJSON.searchPhrase;
  var type = searchJSON.searchType;

  console.log("startURL: " + startURL);
  console.log("nDepth: " + nDepth);
  console.log("searchPhrase: " + phrase);
  console.log("searchType: " + type);

  //pyParrotCrawl(searchTerms);

  //send the search terms back to angular
  res.status(200).send("Are you talking to ME?");
});


//listen on port 8000 for requests
app.listen(8000, () => {
  console.log('ParrotServe started on port http://localhost:8000!');
});
