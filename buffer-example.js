var buf = new Buffer(26);

for(var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toString("utf-8"));
console.log(buf.toString("ascii", 0, 8));

var bufForSlice = new Buffer("Hello you are for extra slice");
console.log(bufForSlice.slice(0, 20));
