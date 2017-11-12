var fs = require('fs')
var filepath = process.argv[2];

fs.readFile(filepath, function callback(err,data){
    if(err) return err;
    
    var str = data.toString();
    var arr = str.split('\n');
    var l = arr.length-1;
    
    console.log(l);
})
