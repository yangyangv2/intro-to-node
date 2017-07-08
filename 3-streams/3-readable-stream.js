var request = require('request');

var s = request('http://www.pluralsight.com/');

s.on('data', function(chuck){
    console.log('>>>Data>>> ' + chuck);
});

s.on('end', function(){
    console.log('>>>Done!>>>');
});