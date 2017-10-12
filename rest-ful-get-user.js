var express = require("express");
var fs = require("fs");

var app = express();

app.get("/:id", (req, res) => {
	fs.readFile(__dirname +  "/users.json", (err, data) => {
		var users = JSON.parse(data);
		var user = users["user" + req.params.id];
		res.end(JSON.stringify(user));
	});
});

var server = app.listen(9095, () => {
	console.log("Server started at http://localhost:9095");
});
