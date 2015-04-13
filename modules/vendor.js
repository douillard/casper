var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");


casper.test.begin('/find-vendor', 7, function suite(test) {
    casper.start(casper.options.baseUrl + "find-vendor", function() { 
        dataLayer.runTest(casper,test,"vendor-search");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "vendor-search", parent: "local" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    casper.run(function() { test.done(); });
});

casper.test.begin('/denver/wedding-venues', 7, function suite(test) {
    casper.start(casper.options.baseUrl + 'denver/wedding-venues', function() {
        dataLayer.runTest(casper,test,"vendor-search");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "vendor-search", parent: "local" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    casper.run(function() { test.done(); });
});

casper.test.begin('/vendors/devils-thumb-ranch-resort-spa-55640', 6, function suite(test) {
    casper.start(casper.options.baseUrl + 'vendors/devils-thumb-ranch-resort-spa-55640', function() { 
        dataLayer.runTest(casper,test,"vendor-profile");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "vendor-search", parent: "profile"});
    });
    adUnit.runTest(casper, test,'#div-gpt-bottomBanner');
    adUnit.runTest(casper, test,'#div-gpt-narrowTopBanner');
    casper.run(function() { test.done(); });
});
