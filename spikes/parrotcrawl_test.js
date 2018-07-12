//parrotcrawl.js

//===============  setup  ===============
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'})

//==========  configuration  ============
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.set('port', process.argv[2]);


//==============  routes  ===============

app.get('/', function(req, res){
  res.render('test', {title: 'ParrotCrawl'});
});



app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});


//output to user
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});
