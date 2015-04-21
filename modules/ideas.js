var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");
var login      = require("../components/login.js");
var navigate   = require("../components/navigate.js");

casper.test.begin('/ideas', 9, function suite(test) {
    casper.start(casper.options.baseUrl + "ideas", function() { 
        dataLayer.runTest(casper,test,"ideas");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "ideas" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-myWeddingCustom");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test, "#div-gpt-lazy-square-fixed-1");
    casper.run(function() { test.done(); });
});

casper.test.begin('/ideas/find/summer', 7, function suite(test) {
    casper.start(casper.options.baseUrl + "ideas/find/summer", function() { 
        dataLayer.runTest(casper,test,"ideas-filter");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "ideas" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test, "#div-gpt-lazy-square-fixed-1");
    casper.run(function() { test.done(); });
});

casper.test.begin('/ideas/image (ideas full-view image)', 7, function suite(test) {
    casper.start(casper.options.baseUrl + "ideas/image/wedding-ideas/sophia-tolli-bridal/a25a2d86-e369-11e2-8feb-0026b9489ff2", function() { 
        dataLayer.runTest(casper,test,"ideas-full-view");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "ideas", parent: "full-view" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-lazy-atf-square-fixed-1");
    adUnit.runTest(casper, test, "#div-gpt-lazy-leaderboard-fixed-1");
    casper.run(function() { test.done(); });
});
