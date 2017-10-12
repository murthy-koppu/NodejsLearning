var fs = require("fs");
var data = "Simple text to write data";
var writerStream = fs.createWriteStream("sample.output.txt");

writerStream.write(data, "utf-8");
writerStream.end();
writerStream.on("finish", () => console.log("writer completed"));
writerStream.on("error", (error) => console.log(err.stack));
console.log("Completed");

