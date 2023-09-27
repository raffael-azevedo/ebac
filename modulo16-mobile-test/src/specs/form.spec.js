const formsScreen = require('../screens/forms.screen')
const should = require('chai').should()
//const expect = require('chai').expect()

describe('acessar formulario', () => {
    it('deve abrir o formulário', async () => {
        await driver.launchApp()
        await $(formsScreen.formSectionButton).click()
        await $(formsScreen.inputField).addValue("hasta la vista baby")
        await $(formsScreen.switch).click()
        await $(formsScreen.dropdownSelector).click()
        await $(formsScreen.dropdownOption2).click()
        await $(formsScreen.buttonActive).click()

        should.exist(formsScreen.buttonAlert)
    })
})