var fs = require("fs");

fs.stat("hello-world.js", (err, stats) => {
	if(err) {
		console.error(err);
	}
	console.log(stats);
	console.log("Got file stats");

	console.log("Is a file" + stats.isFile());
	console.log("Is a DIRECTORY" + stats.isDirectory());
});
