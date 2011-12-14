#!/usr/bin/env node

var http = require('http');
var count = 0;


// makes a single HTTP request
function httpCall() {

  var options = {
    host: "localhost",
    port: 1337,
    path: '/foo/bar'
  };

  http.get(options, function(res) {
    // console.log("Got response: " + res.statusCode);

    res.on('data', function (chunk) {
      // console.log('BODY: ' + chunk);
    });

    res.on('end', function () {
      if (++count % 1000 == 0) {
        console.log(count);
      }

      httpCall();
    });

  }).on('error', function(e) {
    console.log("Error: %s", e.message);
    httpCall();
  });
}


for (var i = 0; i < 100; i++) {
  httpCall();
}
