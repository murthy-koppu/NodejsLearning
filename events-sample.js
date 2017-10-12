var events = require("events")
var emitter = new events.EventEmitter();

var connectionHandler = () => {
	console.log("Connection successful");
	
	emitter.emit("data_received");
}
emitter.on("connection", connectionHandler);

emitter.on("data_received", () => console.log("recevied data"));

emitter.emit("connection");

console.log("Ended");

