var fs = require("fs");

var filepath = process.argv[2];
var buf = fs.readFileSync(filepath);
var str = buf.toString();
var arr = str.split('\n');
var l = arr.length-1;
console.log(l);