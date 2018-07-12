var PythonShell = require('python-shell');
var pyshell = new PythonShell('python_shell_test.py');

var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3',
    pythonOptions: ['-u'],
};


pyshell.send(JSON.stringify([1,2,3,4,5]));

pyshell.on('message', function (message) {
  console.log("The data I received from python was " + message);
});


pyshell.end(function(err){
  if(err){
    throw err;
  };

  console.log('finished')
});
