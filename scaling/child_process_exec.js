var fs = require("fs");
var child_process = require("child_process");

for(var i=0; i<3; i++) {
	var worker_process = child_process.exec("node support.js " + i, (error, stdout, stderr) => {
		if(error) {
			console.log(error.code + "hello stack" + error.stack);
			console.log("Error signal: " + error.signal);
		}
		console.log("stdout is: " + stdout);
		console.log("stderr is: " + stderr);
	});

	worker_process.on("exit", (data) => {
		console.log("child process exited with code: " + data);
	});
}
