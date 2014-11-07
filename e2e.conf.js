exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:3000/#!/',
    specs: ['public/modules/*/tests/e2e/*.js'],
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 60000
    },
    capabilities: {
        'browserName': 'chrome'
    },
    multiCapabilities: [{
        'browserName': 'phantomjs',
        /* 
         * Can be used to specify the phantomjs binary path.
         * This can generally be ommitted if you installed phantomjs globally.
         */
        'phantomjs.binary.path': require('phantomjs').path,
        /*
         * Command line args to pass to ghostdriver, phantomjs's browser driver.
         * See https://github.com/detro/ghostdriver#faq
         */
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }]
}
