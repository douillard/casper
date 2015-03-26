exports.runTest = function runTest(casper, test, route) {
    casper.then(function() {
       this.echo("# /" + route, "COMMENT")
       this.thenOpen(casper.options.baseUrl + route, function() {
           test.assertUrlMatch(route, 'navigated to ' + route);
       });
    });
}
