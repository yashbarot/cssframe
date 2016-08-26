var client = require('webdriverio').remote({
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    host: 'localhost',
    port: 4445,
    desiredCapabilities: {
        browserName: 'chrome',
        name: '26 Aug 2016 : Test - 1 with Job Status',
        public: true
    },
});

client
    .init()
    .url('http://localhost/cssframe/components/flexgrid.html')
    .getTitle().then(console.log)
    .end();