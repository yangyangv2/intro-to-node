var maxTime = 1000;

var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};


var handleResults = function(err, results, time){
    if(err){
        console.log('Error: ' + err.message);
    } else {
        console.log('The result are :' + results + '(' + time + 'ms)');
    }
}

for(var i = 0; i < 10; i ++){
    evenDoubler(i, handleResults);
}

console.log('-------');