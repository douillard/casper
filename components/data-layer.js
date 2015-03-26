exports.runTest = function runTest(casper, test, arg) {

    return casper.then(function() {
        var dataLayer = casper.getGlobal('dataLayer');
        var siteSection = dataLayer[0].siteSection;
        casper.test.assertEquals(siteSection, arg, "dataLayer.siteSection should equal " + arg);
    });
}
