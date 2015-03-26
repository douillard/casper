var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");

casper.test.begin("/ (homepage)", 8, function suite(test) {
    casper.start(casper.options.baseUrl, function() { 
        dataLayer.runTest(casper,test,"home");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "home" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-tertiarySquare");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-myWeddingCustom");
    casper.run(function() { test.done(); });
});

casper.test.begin("/home/find-vendor", 7, function suite(test) {
    casper.start(casper.options.baseUrl + "home/find-vendor", function() { 
        dataLayer.runTest(casper,test, "home-vendor-search");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "home", parent: "local" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin("/free-wedding-websites", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "free-wedding-websites", function() { 
        dataLayer.runTest(casper,test,"home-fww");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "home", parent: "planning", child: "mysite" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-lazy-halfPage-fixed-1");
    casper.run(function() { test.done(); });
});

casper.test.begin("/planning", 6, function suite(test) {
    casper.start(casper.options.baseUrl + "planning", function() { 
        dataLayer.runTest(casper,test, "home-planning");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "home", parent: "planning" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin("/registries", 6, function suite(test) {
    casper.start(casper.options.baseUrl + "registries", function() { 
        dataLayer.runTest(casper,test, "home-registry");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "home", parent: "registries" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin("/travel", 9, function suite(test) {
    casper.start(casper.options.baseUrl + "travel", function() { 
        dataLayer.runTest(casper,test, "home-travel");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "home", parent: "travel" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-topBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-lazy-halfPage-fixed-1");
    casper.run(function() { test.done(); });
});
