var adService = require("./ad-service.js");
var _         = require("../vendor/underscore.js");

exports.runTest = function runTest(casper, test, obj) {

    casper.then(function() {
        casper.waitUntilVisible(obj.id, function () {
            this.echo("# " + obj.path + " (pushState) ", "COMMENT")
            this.echo("INFO navigating to " + obj.path);
            test.assertVisible(obj.id, obj.id + ' should be visible');
            this.click(obj.id);
        });
    });

    casper.then(function() {
        casper.waitForUrl(obj.path, function() {
            test.assertUrlMatch(obj.path, 'page should be ' + obj.path);
        });
    });

    casper.then(function() {
        adService.runTest(casper, test, { channel: obj.channel, parent: obj.parent });
    });

    _.each(obj.units, function (unit) {
        adUnit.runTest(casper, test, unit);
    });
};
