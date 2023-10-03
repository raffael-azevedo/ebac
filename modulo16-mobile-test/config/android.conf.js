const {config} = require('./wdio.conf');
const androidInfo = require('./android.info');
const path = require('path');

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        "appium:automationName": 'uiautomator2',
        maxInstances: 1,
        "appium:noReset": true,
        "appium:fullReset": false,
        "appium:deviceName": androidInfo.deviceName,
        "appium:platformVersion": androidInfo.platformVersion,
        "appium:app": path.resolve('app/' + androidInfo.app),
        "appium:appActivity": "MainActivity",
        "appium:packageName": "com.wdiodemoapp"
    }
];

config.specs = [
    '../src/specs/*.js'
];

exports.config = config;