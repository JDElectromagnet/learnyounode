var fs = require('fs')
var path = require('path')

var ext= process.argv[3];
var dir = process.argv[2];

fs.readdir(dir, function callback(err, data){
    if(err) return err;
    
    console.log(data);
})
