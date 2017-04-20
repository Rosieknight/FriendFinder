//Variable for the two dependencies this part has.
var express = require("express");
var bodyParser = require("body-parser");

//Variables for the server to be created for this app because heroku does not set 
//fixed ports.
var app = express();
var PORT = process.env.PORT || 3000;

//Rest of the server set up.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//Alows access to the routing files.
require("app/routing/apiRouts.js");
require("app/routing/htmlRouts.js");

//Sets up a listener we will need later. Also functions as a sanity check.
app.listen(PORT, function(){
	console.log("It's working! The app is listening to port " + PORT);
});