'use strict';

var express = require('express');
var app = express();
var router = express.Router();
var port = 5000;

app.use(express.static('public'));
app.get('/*', function(req, res) {
    res.sendfile('./public/index.html');
});
app.listen(port, function () {
  console.log('server running on port ' + port);
});