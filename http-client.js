var http = require("http");

var options = {
	host: "127.0.0.1",
	port: "8095",
	path: "/sample.htm"
};

http.request(options, (res) => {
	var output = "";
	res.on("data", (data) => output += data);
	res.on("end", () => console.log(output));
}).end();
