exports.runTest = function runTest(casper, test, unit) {
    casper.then(function() {
        casper.waitUntilVisible(unit + ' iframe', function(){
            test.assertVisible(unit + ' iframe', unit + ' <iframe> should be visible');
        }, function () {
            this.echo("FAIL " + unit + " should be visible", "ERROR");
        });
    });
}
