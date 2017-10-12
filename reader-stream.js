var fs = require("fs");
var data = '';
var readerStream = fs.createReadStream('buffer-example1.js');

readerStream.on('data', (chunk) => {
	data += chunk;
});

readerStream.on('end', () => {
	console.log(data);
});

readerStream.on('error', (error) => {
	console.log(error);
});

console.log("finished");
