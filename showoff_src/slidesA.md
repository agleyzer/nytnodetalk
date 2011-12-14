!SLIDE title-slide

# Load Testing #


!SLIDE bullets>>
# Objective #

* Load testing HTTP aplication
* Variable requests
* Response processing
* Custom statistics


!SLIDE bullets>>
# Existing options #

* ab
* jMeter
* The Grinder


!SLIDE bullets>>
# Node.js #

* Event-driven
* Non-blocking I/O
* Efficient http client
* Tons of simultaneous connections


!SLIDE
# Non-blocking I/O #

    @@@ javascript
    httpGet(url, function(err, data) {
      if (err) throw err;
      process(data);
    });


!SLIDE
# Non-blocking I/O 2 #

    @@@ javascript
    httpGet(url1, function(err, data) {
      if (err) throw err;
      db.insert(data, function(err, id) {
        if (err) throw err;
        httpPost(url2, id, function(err, data) {
          if (err) throw err;
          log("processed record", id);
        });
      });
    });


!SLIDE
# Wrong #

    @@@ javascript
    while (!isDone()) {
      httpCall(url, function(err, data) {
        if (err) throw err;
        process(data);
      });
    }


!SLIDE
# Right #

    @@@ javascript
    function step() {
        if (isDone()) return;
        httpCall(url, function(err, data) {
          if (err) {
            console.log("Error", err);
          } else {
            process(data);
          }
          step();
        });
    }
    step();


!SLIDE
# Multiple "threads" #

    @@@javascript
    for (i = 0; i < 100; i++) {
      step();
    }


!SLIDE bullets>>
# Issues #

* Keep alive
* Internal connection pooling
* OS resource cleanup
* OSX/Linux inconsistencies


!SLIDE
# Demo #
