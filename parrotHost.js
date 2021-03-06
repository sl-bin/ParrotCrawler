//--------  Server Requirements ---------//
const express = require('express');
const path  = require('path');
const VIEWS = path.join(__dirname);
const app = express();


//------------  Server Routes ------------//
app.listen('20213', () => {
  console.log('ngxServe started!');
});

app.use(express.static('dist/ParrotCrawler'));


app.get('/*', function(req,res){
  res.sendFile('dist/ParrotCrawler/index.html', { root : VIEWS });
})
