# casperjs test suite

## run:
```
casperjs test ./casper/modules/ --includes=casper/options.js --domain=[www.example.com]
```

[Casper Quickstart Guide](http://docs.casperjs.org/en/latest/quickstart.html)

[Casper GitHub](https://github.com/n1k0/casperjs)

## available options:
```
--xunit=<filename> will export test suite results in a XUnit XML file
--direct or --verbose will print log messages directly to the console
--log-level=<logLevel> sets the logging level (see the related section)
--auto-exit=no prevents the test runner to exit when all the tests have been executed; this usually
  allows performing supplementary operations, though implies to exit casper manually listening to the
  exit tester 
--includes=foo.js,bar.js will include the foo.js and bar.js files before each test file execution.
--pre=pre-test.js will add the tests contained in pre-test.js before executing the whole test suite.
--post=post-test.js will add the tests contained in post-test.js after having executed the whole test suite.
--fail-fast will terminate the current test suite as soon as a first failure is encountered.
--concise will create a more concise output of the test suite.
--no-colors will create an output without (beautiful) colors from casperjs.
```
