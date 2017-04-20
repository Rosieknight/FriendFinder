//In order to route things correctly, we need the path npm.
var path = require("path");

//The routes are below.
module.exports = function(app) {
  // HTML GET Requests
  //When a user wants to see a page, this code tells which page should load. Useful.

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};