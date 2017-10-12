var express = require("express");
var fs = require("fs");

var app = express();
var newUser = {
		"name": "mohit",
		"password": "password4",
		"profession": "employee",
		"id": 4
	}

app.post("/addUser", (req, res) => {
	fs.readFile(__dirname + "/" + "users.json", "utf-8", (err, data) => {
		var users = JSON.parse(data);
		users["user4"] = newUser;
		res.end(JSON.stringify(users));

	});
});

var server = app.listen("9095", () => {
	console.log("Add User server running at http://%s:%s", server.address().address, server.address().port);
});

