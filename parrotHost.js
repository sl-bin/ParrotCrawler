//--------  Server Requirements ---------//
const express = require('express');
const path  = require('path');
const VIEWS = path.join(__dirname, 'dist/ParrotCrawler');
const app = express();


//------------  Server Routes ------------//
app.listen('11676', () => {
  console.log('ngxServe started!');
});

app.use(express.static('dist/ParrotCrawler'));


app.get('/*', function(req,res){
  res.sendFile('index.html', { root : VIEWS });
})
