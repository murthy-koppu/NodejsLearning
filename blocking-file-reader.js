var fs = require("fs")
var data = fs.readFileSync("hello-world.js")

console.log(data.toString())
console.log("completed")
