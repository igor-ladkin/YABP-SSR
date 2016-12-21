require('babel-register');

const result = require('./render').default;

const express = require('express');
const application = express();

application.get('/', function(req, res) {
  res.send(result);
});

application.listen(3005);
console.log('Start listening incoming requests on port 3005');
