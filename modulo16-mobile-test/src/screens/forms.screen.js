class WdioNativeAppFormScreen {
    constructor() {
        this.formSectionButton = '~Forms'
        this.inputField = '~text-input'
        this.inputFieldResult = '~input-text-result'
        this.switch = '~switch'
        this.switchText = '~switch-text'
        this.dropdownSelector = '//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
        this.dropdownOption1 = '//android.widget.CheckedTextView["@resource-id=android:id/text1"][2]'
        this.dropdownOption2 = '//android.widget.CheckedTextView["@resource-id=android:id/text1"][3]'
        this.dropdownOption3 = '//android.widget.CheckedTextView["@resource-id=android:id/text1"][4]'
        this.buttonActive = '~button-Active'
        this.buttonAlert = '//android.widget.TextView[@text="This button is active"]'
        this.okButton = '//android.widget.Button[@text="OK"]'
    }
}

module.exports = new WdioNativeAppFormScreen();