var fs = require("fs");

fs.readFile("hello-world.js", (error, data) => {
	console.log(data.toString());
	console.log("completed");
});

console.log("yet to read");

