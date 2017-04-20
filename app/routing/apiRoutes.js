//Linking the api route to the friend array in the data folder.
var friendData = require("../data/friends");

//Because this information is needed elsewhere... have an exports.
module.exports = function(app) {

	//To pull up the data from the friends array, without making any changes.
	//A GET request.
	app.get("/api/friends", function(req, res) {
	    res.json(friendData);
	  });

	//To add a new person to the friends array.
	//A POST request.
	app.post("/api/friends", function(req, res) {
		var sortingArray = [];
		for (var i = 0; i < friends.length; i++) {
			if(data.totalScore === friends[i]){
				
			}
			friends[i]
		}
		
		

		friendData.push(req.body);
	});

};