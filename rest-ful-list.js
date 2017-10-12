var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers", (req, res) => {
	fs.readFile(__dirname + "/users.json", "utf-8", (err, data) => {
		console.log(data);
		res.send(data);
	});
});

var server = app.listen(8095, () => {
	console.log("Starting on http://%s:%s", server.address().address, server.address().port);
});
