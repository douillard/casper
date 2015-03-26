exports.runTest = function runTest(casper, test) {

    casper.then(function() {
        casper.waitForResource("gpt.core.js", function() {
            test.assertResourceExists(function(resource) {
                return resource.url.match('gpt.core.js');
            }, "gpt.core.js should load");
        }, function () {
            //this.echo("WARN gpt.core.js should load (likely cached in phantomjs)");
        });
    });

    casper.then(function() {
        casper.waitForResource("gpt.adServiceRender.js", function() {
            test.assertResourceExists(function(resource) {
                return resource.url.match('gpt.adServiceRender.js');
            }, "gpt.adServiceRender.js should load");
        }, function () {
            //this.echo("WARN gpt.adService.js should load (likely cached in phantomjs)");
        });
    });

}

