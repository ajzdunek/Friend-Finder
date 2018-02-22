var path = require("path");

var friends = require("../data/friend.js");

module.exports = function(app) {
  
 app.get("/data/friend", function(req, res) {
    res.json(friends);
  });


};