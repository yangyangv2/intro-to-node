var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/'
};

console.log('Going to make request ...');

http.get(options, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

// var req = http.request() 
// ...
// req.end();
