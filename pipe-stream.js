var fs = require("fs")
var readerStream = fs.createReadStream("sample-output.txt");
var writerStream = fs.createWriteStream("sample-output-clone.txt");

readerStream.pipe(writerStream);

console.log("Ended program");

