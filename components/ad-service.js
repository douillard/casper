exports.runTest = function runTest(casper, test, obj) {

    casper.then(function() {
        casper.waitFor(function check() {
            var adServiceQ = this.page.evaluate(function() { return window.adServiceQ; });
            if (typeof adServiceQ === "object") { 
                var tester = true;
                test.assertEquals(tester, true, "adServiceQ should be a global object on window ");
                return tester; 
            }
        });
    });

    casper.then(function() {
        var getChannel = this.page.evaluate(function() { return window.adService.pageTargetingValues.channel; });
        test.assertEquals(getChannel, obj.channel, "channel should equal " + obj.channel);
    });

    casper.then(function() {
        if (obj.parent) {
            var getParent = this.page.evaluate(function() {
                return window.adService.pageTargetingValues.parent;
            });
            casper.test.assertEquals(getParent, obj.parent, "parent should equal " + obj.parent);
        }
    });

    casper.then(function() {
        if (obj.child) {
            var getChild = this.page.evaluate(function() {
                return window.adService.pageTargetingValues.child;
            });
            casper.test.assertEquals(getChild, obj.child, "child should equal " + obj.child);
        }
    });
}
