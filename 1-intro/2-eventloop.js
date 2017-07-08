var count = 0;

var t = setInterval(function() {
    count++;
    console.log('interval of 10 ms, count = ' + count);
    if(count == 10){
        clearInterval(t);
    }
}, 1);


setTimeout(function(){
    console.log('Timeout at 200ms');
}, 200)

console.log('Running');