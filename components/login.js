
exports.runTest = function runTest(casper, test) {

    casper.waitUntilVisible('#btn-login', function () {
        this.echo("INFO starting login");
        test.assertVisible('#btn-login', 'login button should be visible');
        this.click('#btn-login');
        this.echo("INFO login button clicked");
    });

    casper.waitUntilVisible('.modal-body', function () {
        test.assertVisible('.modal-body form', 'login form should be visible');
        this.fill('.modal-body form', {
            'email'   : 'cdouillard@me.com',
            'password': 'password'
        });
        this.echo("INFO username entered");
        this.echo("INFO password entered");

        this.click('#btnLogin');
        this.echo("INFO submit clicked");
    });

    casper.then(function() {
        casper.waitForUrl('/apps/home/account/summary', function() {
            test.assertUrlMatch('/apps/home/account/summary', 'user should be authenticated');
        });
    });

}
