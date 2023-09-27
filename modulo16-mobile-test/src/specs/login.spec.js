const wdioLogin = require('../screens/wdioLogin.screen');
let should = require('chai').should()

describe('fill the form', () => {
    it('should open the app and fill the form', async () => {
        await driver.launchApp()
        await $(wdioLogin.loginSectionButton).click()
        await $(wdioLogin.emailTextField).addValue('aaa@aaa.com')
        await $(wdioLogin.passwordTextField).addValue('12345678')
        await $(wdioLogin.loginButton).click()

        const successAlert = $('//android.widget.FrameLayout[@resource-id="android:id/content"]') 
        const alertTitle = $('//android.widget.TextView[@id="android:id/alertTitle"]')

        should.exist(successAlert);
        setTimeout(function() {
            alertTitle.should.equal('Success')
        }, 2000)
    })
})