exports.runTest = function runTest(casper, test) {

    casper.waitUntilVisible('#navigation', function () {
        test.assertExists('#navigation', 'header navigation should exist');
    });

    casper.then(function() {
        test.assertVisible('#navigation', 'header navigation should be visible');
        this.echo(casper.options.separator);
    });
}
