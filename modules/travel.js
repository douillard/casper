var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");

casper.test.begin('/honeymoons', 8, function suite(test) {
    casper.start(casper.options.baseUrl + "honeymoons", function() { 
        dataLayer.runTest(casper,test,"travel-honeymoon");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "travel" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    adUnit.runTest(casper, test, "#div-gpt-lazy-square-fixed-1");
    casper.run(function() { test.done(); });
});

casper.test.begin('/destination-weddings', 8, function suite(test) {
    casper.start(casper.options.baseUrl + "destination-weddings", function() { 
        dataLayer.runTest(casper,test,"travel-destination");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "travel" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    adUnit.runTest(casper, test, "#div-gpt-lazy-square-fixed-1");
    casper.run(function() { test.done(); });
});
