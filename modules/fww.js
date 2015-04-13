var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");


casper.test.begin('apps/public/mw/mysite_styles.php', 7, function suite(test) {
    casper.start(casper.options.baseUrl + "apps/public/mw/mysite_styles.php", function() { 
        dataLayer.runTest(casper,test,"unregistered-fww-browse");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "unregistered", parent: "fww-browse" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-lazy-halfPage-fixed-1");
    casper.run(function() { test.done(); });
});
