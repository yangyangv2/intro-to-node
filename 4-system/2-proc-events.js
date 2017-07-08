// A slight variation of the sample found here:
// http://nodejs.org/api/process.html#process_process_stdin

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('Data! -> ' + chunk);
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
    process.stderr.write('why are you trying to terminate me?!? :-)' );
});

console.log('Node is running as process #' + process.pid);