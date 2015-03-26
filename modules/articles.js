var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var dataLayer  = require("../components/data-layer.js");
var loadScript = require("../../components/load-script.js");

casper.test.begin("/articles", 10, function suite(test) {
    casper.start(casper.options.baseUrl + "articles", function() {
        dataLayer.runTest(casper,test,"articles-homepage");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "homepage" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});


casper.test.begin("/articles/category/real-weddings", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/real-weddings", function() {
        dataLayer.runTest(casper,test,"articles-real-weddings");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "real-wedding" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});


casper.test.begin("/articles/category/decor-details", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/decor-details", function() {
        dataLayer.runTest(casper,test,"articles-decor-details");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "decor-details" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});


casper.test.begin("/articles/category/wedding-whims", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/wedding-whims", function() {
        dataLayer.runTest(casper,test,"articles-wedding-whims");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "wedding-whims" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});


casper.test.begin("/articles/category/diy", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/diy", function() {
        dataLayer.runTest(casper,test,"articles-diy");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "diy" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

/*
casper.test.begin("/articles/category/post", 6, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/post", function() {
        dataLayer.runTest(casper,test,"articles-post");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "post" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    casper.run(function() { test.done(); });
});
*/

casper.test.begin("/articles/category/wedding-etiquette", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/wedding-etiquette", function() {
        dataLayer.runTest(casper,test,"articles-wedding-etiquette");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "etiquette" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

/*
casper.test.begin("/articles/category/myexperts", 6, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/myexperts", function() {
        dataLayer.runTest(casper,test,"articles-myexperts");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "myexperts" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    casper.run(function() { test.done(); });
});
*/

casper.test.begin("/articles/category/food-drinks", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/food-drinks", function() {
        dataLayer.runTest(casper,test,"articles-food-drinks");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "food-drink" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin("/articles/category/fashion-style", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/fashion-style/", function() {
        dataLayer.runTest(casper,test,"articles-fashion-style");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "fashion-style" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin("/articles/category/travel-destinations", 8, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/travel-destinations", function() {
        dataLayer.runTest(casper,test,"articles-travel-destinations");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "travel-destinations" });
    });
    adUnit.runTest(casper, test, "#div-gpt-bottomBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    adUnit.runTest(casper, test, "#div-gpt-rightBannerLower");
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

/*
casper.test.begin("/articles/category/myexperts-answer", 6, function suite(test) {
    casper.start(casper.options.baseUrl + "articles/category/myexperts-answer", function() {
        dataLayer.runTest(casper,test,"articles-myexperts-answer");
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "articles", parent: "myexperts", child: "answer" });
    });
    adUnit.runTest(casper, test,"#div-gpt-bottomBanner");
    adUnit.runTest(casper, test,"#div-gpt-narrowTopBanner");
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    casper.run(function() { test.done(); });
});
*/
