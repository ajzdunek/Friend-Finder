var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

//Links server to necessary route files
app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//Routes to API and HTML
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

