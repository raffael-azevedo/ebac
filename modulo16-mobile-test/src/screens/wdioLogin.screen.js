class WdioNativeAppLoginScreen {
    constructor() {
        this.loginSectionButton = '//android.widget.TextView' +
        '[@text="Login"]'
        this.emailTextField = '~input-email'
        this.passwordTextField = '~input-password'
        this.loginButton = '~button-LOGIN'
    }
}

module.exports = new WdioNativeAppLoginScreen();