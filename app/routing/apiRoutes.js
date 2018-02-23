var path = require("path");

var musicians = require("../data/friend.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(musicians);
  })

	 app.post("/api/friends", function(req, res) {

			var leadScore = req.body.scores;
			var scoreArray = [];
			var bestMatch = 0;
	
			for (var i = 0; i < musicians.length; i++) {
				var scoreDifference = 0;

				for (var x = 0; x < leadScore.length; x++) {
					scoreDifference += Math.abs(parseFloat(musicians[i].scores[x]) - parseFloat(leadScore[x]));
				}
	
			scoreArray.push(scoreDifference);
			}
		
			for (var i = 0; i < scoreArray.length; i++) {
				if (scoreArray[i] <= scoreArray[bestMatch]) {
					bestMatch = i;
				}
			}
			
			var leadFront = musicians[bestMatch];
			res.json(leadFront);
		})


};
