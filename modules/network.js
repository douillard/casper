var adUnit     = require("../components/ad-unit.js");
var adService  = require("../components/ad-service.js");
var navigate   = require("../components/navigate.js");
var loadScript = require("../../components/load-script.js");


casper.test.begin('maharani/lb.html', 4, function suite(test) {
    casper.start('http://network.mytestwedding.com/maharani/lb.html', function() { 
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "partners", parent: "maharani_homepage" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin('maharani/tt.html', 4, function suite(test) {
    casper.start('http://network.mytestwedding.com/maharani/tt.html', function() { 
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "partners", parent: "maharani_homepage" });
    });
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    casper.run(function() { test.done(); });
});

casper.test.begin('maharani/mr.html', 4, function suite(test) {
    casper.start('http://network.mytestwedding.com/maharani/mr.html', function() { 
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "partners", parent: "maharani_homepage" });
    });
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin('wedding_yentas/lb.html', 4, function suite(test) {
    casper.start('http://network.mytestwedding.com/wedding_yentas/lb.html', function() { 
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "partners", parent: "wedding_yentas_homepage" });
    });
    adUnit.runTest(casper, test, "#div-gpt-narrowTopBanner");
    casper.run(function() { test.done(); });
});

casper.test.begin('wedding_yentas/tt.html', 4, function suite(test) {
    casper.start('http://network.mytestwedding.com/wedding_yentas/tt.html', function() { 
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "partners", parent: "wedding_yentas_homepage" });
    });
    adUnit.runTest(casper, test, "#div-gpt-skyscraper");
    casper.run(function() { test.done(); });
});

casper.test.begin('wedding_yentas/mr.html', 4, function suite(test) {
    casper.start('http://network.mytestwedding.com/wedding_yentas/mr.html', function() { 
        loadScript.runTest(casper, test);
        adService.runTest(casper, test, { channel: "partners", parent: "wedding_yentas_homepage" });
    });
    adUnit.runTest(casper, test, "#div-gpt-shortRightBanner");
    casper.run(function() { test.done(); });
});
