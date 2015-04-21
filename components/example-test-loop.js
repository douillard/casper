var _ = require("../vendor/underscore.js");

var urls = [ 
    "http://www.mywedding.com/",
    "http://www.mywedding.com/home/find-vendor",
    "http://www.mywedding.com/home/travel",
    "http://www.mywedding.com/home/free-wedding-websites"
];


_.each(urls, function (url) {

    casper.test.begin(url, 1, function suite(test) {

        casper.start(url, function() { 

            casper.then(function() {

                casper.waitFor(function check() {
                    
                    return this.evaluate(function() {
                        return document.querySelectorAll('.dfp-placement iframe').length > 4;
                    });

                }, function then() {    // step to execute when check() is ok

                    var units = this.getElementsInfo(".dfp-placement iframe").length;

                    test.assertElementCount('.dfp-placement iframe', units);

                }, function timeout() { // step to execute if check has failed

                    this.echo("Looks like we timedout.");

                });
            });
        });
        casper.run(function() { test.done(); });
    });

});
