var fs = require("fs");

fs.open("hello-world.js", 'r+', (err) => {
	if(err) {
		return console.error(err);
	}
	console.log("File opened success");
});
