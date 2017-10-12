var fs = require("fs")

fs.readFile("hello-world.js", (err, data) => {
	if(err) {
		return console.error(err);
	}

	console.log("Reading asynchronously" + data.toString());
});

