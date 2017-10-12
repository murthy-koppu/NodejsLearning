var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer((req, response) => {
	var pathname = url.parse(req.url).pathname;
	console.log("received path: " + pathname);
	fs.readFile(pathname.substr(1), (err, bytes) => {
		if(err) {
			console.log(err);
			response.writeHead("404", {"Content-Type": "text/html"});
		} else {
			response.writeHead("200", {"Content-Type": "text/html"});
			response.write(bytes.toString());
		}
		response.end();

	});
}).listen(8095);

console.log('server running at http://127.0.0.1:8095');
