var express = require("express");
var bodyparser = require("body-parser");
var connection = require('./db');
var routes = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var server = app.listen(3020, function() {
  console.log("Server listening on port " + server.address().port);
});
