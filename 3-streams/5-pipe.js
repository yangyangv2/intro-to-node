var request = require('request');
var fs = require('fs');
var zlib = require('zlib');
request('http://www.pluralsight.com/')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('output.html'));

fs.unlinkSync('output.html');