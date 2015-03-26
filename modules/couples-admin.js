var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../components/load-script.js");
var login      = require("../components/login.js");
var navigate   = require("../components/navigate.js");

casper.test.begin("/apps/home/account/summary", 52, function suite(test) {

    casper.start(casper.options.baseUrl, function() { 
        dataLayer.runTest(casper, test, "home");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "home"});
    });

    login.runTest(casper, test);

    navigate.runTest(casper, test, "apps/home/account");
    dataLayer.runTest(casper, test, "couples-admin-planning-home");
    loadScript.runTest(casper, test);
    adService.runTest(casper, test, { channel: "couples-admin", parent: "planning", child: "home" });
    adUnit.runTest(casper, test, "#div-gpt-tertiarySquare");
    adUnit.runTest(casper, test, "#div-gpt-rightBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");

    navigate.runTest(casper, test, "apps/planner?tab=budget");
    dataLayer.runTest(casper, test, "couples-admin-planning-budget");
    loadScript.runTest(casper, test);
    adService.runTest(casper, test, { channel: "couples-admin", parent: "planning", child: "budget" });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");

    navigate.runTest(casper, test, "apps/mysite");
    dataLayer.runTest(casper, test, "couples-admin-planning-mysite-home");
    loadScript.runTest(casper, test);
    adService.runTest(casper, test, { channel: "couples-admin", parent: "planning", child: "mysite.home" });
    adUnit.runTest(casper, test, "#div-gpt-tertiarySquare");
    adUnit.runTest(casper, test, "#div-gpt-rightBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");

    navigate.runTest(casper, test, "apps/mysite-registry");
    dataLayer.runTest(casper, test, "couples-admin-planning-mysite-registry");
    loadScript.runTest(casper, test);
    adService.runTest(casper, test, { channel: "couples-admin", parent: "planning", child: "mysite-registry" });
    adUnit.runTest(casper, test, "#div-gpt-tertiarySquare");
    adUnit.runTest(casper, test, "#div-gpt-rightBanner");
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");

    navigate.runTest(casper, test, "ideas/my-ideas");
    dataLayer.runTest(casper, test, "ideas-my-ideas");
    loadScript.runTest(casper, test);
    adService.runTest(casper, test, { channel: "ideas", parent: "my-ideas" });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");

    navigate.runTest(casper, test, 'apps/mysite/index.php?page=2');
    
    casper.run(function() { test.done(); });
});

