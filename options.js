casper.options.baseUrl      = 'http://' + casper.cli.get('domain') + '/';
casper.options.waitTimeout  = 6000;
casper.options.exitOnError  = false;
casper.options.logLevel     = "debug";
casper.options.viewportSize ={
    width: 2000, 
    height: 10000 
};
