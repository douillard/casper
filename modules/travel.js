var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");

casper.test.begin('/honeymoons', 16, function suite(test) {
    casper.start(casper.options.baseUrl + "honeymoons", function() { 
        dataLayer.runTest(casper,test,"travel-honeymoon");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "travel" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    adUnit.runTest(casper, test, "#div-gpt-lazy-atf-square-fixed-1");
    adUnit.runTest(casper, test, "#div-gpt-lazy-skyscraper-1");

    casper.waitUntilVisible('.link-slide', function () {
        test.assertVisible('.link-slide', 'link-slide should be visible');
        this.click('.link-slide');
        this.echo("INFO navigating to /honeymoons/beach");
        this.echo("# /honeymoons/beach (pushState) ", "COMMENT")
        adUnit.runTest(casper, test, "#div-gpt-lazy-atf-leaderboard-fixed-1");
        adUnit.runTest(casper, test, "#div-gpt-lazy-skyscraper-2");
        adUnit.runTest(casper, test, "#div-gpt-lazy-skyscraper-3");
        adUnit.runTest(casper, test, "#div-gpt-lazy-atf-square-fixed-2");
        adUnit.runTest(casper, test, "#div-gpt-lazy-atf-square-fixed-3");

        casper.then(function() {
            var getLocal = this.page.evaluate(function() { return window.adService.pageTargetingValues.local; });
            test.assertEquals(getLocal, "beach", "local should equal beach");
        });
    });

    casper.run(function() { test.done(); });
});

casper.test.begin('/destination-weddings', 16, function suite(test) {
    casper.start(casper.options.baseUrl + "destination-weddings", function() { 
        dataLayer.runTest(casper,test,"travel-destination");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "travel" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    adUnit.runTest(casper, test, "#div-gpt-lazy-atf-square-fixed-1");
    adUnit.runTest(casper, test, "#div-gpt-lazy-skyscraper-1");

    casper.waitUntilVisible('.link-slide', function () {
        test.assertVisible('.link-slide', 'link-slide should be visible');
        this.click('.link-slide');
        this.echo("INFO navigating to /destination-weddings/beach");
        this.echo("# /destination-weddings/beach (pushState) ", "COMMENT")
        adUnit.runTest(casper, test, "#div-gpt-lazy-atf-leaderboard-fixed-1");
        adUnit.runTest(casper, test, "#div-gpt-lazy-skyscraper-2");
        adUnit.runTest(casper, test, "#div-gpt-lazy-skyscraper-3");
        adUnit.runTest(casper, test, "#div-gpt-lazy-atf-square-fixed-2");
        adUnit.runTest(casper, test, "#div-gpt-lazy-atf-square-fixed-3");

        casper.then(function() {
            var getLocal = this.page.evaluate(function() { return window.adService.pageTargetingValues.local; });
            test.assertEquals(getLocal, "beach", "local should equal beach");
        });
    });
    casper.run(function() { test.done(); });
});
