var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("sample-output.txt")
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("sample-output.txt.gz"));
console.log("compressed");

var readStream = fs.createReadStream("sample-output.txt.gz")
	.pipe(zlib.createGunzip())
	.pipe((data) => console.log(data));
//readStream.on("data", (chunk) => console.log(chunk));
//readStream.on("error", (error) => console.log(error.stack));

console.log("unzipped data");




