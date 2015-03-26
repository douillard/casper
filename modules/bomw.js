var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");

casper.test.begin('/best-of-mywedding-awards', 5, function suite(test) {
    casper.start(casper.options.baseUrl + "best-of-mywedding-awards", function() { 
        dataLayer.runTest(casper,test,"");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "mw" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    casper.run(function() { test.done(); });
});
