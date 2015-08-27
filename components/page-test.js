var adUnit     = require("./ad-unit.js");
var adService  = require("./ad-service.js");
var dataLayer  = require("./data-layer.js");
var loadScript = require("./load-script.js");
var _          = require("../vendor/underscore.js");

exports.runTest = function runTest(casper, obj) {

    var obj = obj;

    casper.test.begin(obj.path, obj.count, function suite(test) {

        casper.start(casper.options.baseUrl + obj.path, function() { 
            dataLayer.runTest(casper,test, obj.dataLayer);
            loadScript.runTest(casper, test);
            adService.runTest(casper, test, { channel: obj.channel, parent: obj.parent });
        });

        _.each(obj.units, function (unit) {
            adUnit.runTest(casper, test, unit);
        });

        casper.run(function() { test.done(); });
    });

    return;
};
