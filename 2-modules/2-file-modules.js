var mathfun = require('./mathfun');

var handleResults = function(err, results, time){
    if(err){
        console.log('Error: ' + err.message);
    } else {
        console.log('The result are :' + results + '(' + time + 'ms)');
    }
}

for(var i = 0; i < 10; i ++){
    mathfun.evenDoubler(i, handleResults);
}

console.log(mathfun.foo);
console.log(mathfun.maxTime);