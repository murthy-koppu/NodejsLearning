var http = require("http");

http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World\n");
}).listen(8180);

console.log("Started http server on 8180");
