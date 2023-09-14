import { faker } from '@faker-js/faker';

// locators
const emailTextField = '#reg_email'
const passwordTextField = '#reg_password'
const registerButton = ':nth-child(4) > .button'
const helloMessage = '#main > div > div'
const errorMessage = '.woocommerce-error > li'
const accountDetailsButton = '.woocommerce-MyAccount-navigation-link--edit-account > a'
const accountFirstNameTextField = '#account_first_name'
const accountLastNameTextField = '#account_last_name'
const displayNameTextField = '#account_display_name'
const saveChangesButton = '.woocommerce-Button'
const successAlert = '.woocommerce-message'

// credentials
let username = function username() {
    return faker.internet.email()
}
let password = function password() {
    return faker.internet.password()
} 
let displayName = faker.internet.displayName()
let firstName = faker.person.firstName()
let lastName = faker.person.lastName()

// tests

describe('pre-register', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('should register with a valid user', () => {
        cy.get(emailTextField).type(username())
        cy.get(passwordTextField).type(password())
        cy.get(registerButton).click()

        cy.get(helloMessage).should('contain', 'Olá')
    })

    it('should throw an error for empty e-mail', () => {
        cy.get(emailTextField).type(' ')
        cy.get(passwordTextField).type(password())
        cy.get(registerButton).click()

        cy.get(errorMessage).should('contain', 'Informe um endereço de e-mail válido')
    })

    it('should throw an error for invalid e-mail', () => {
        cy.get(emailTextField).type(`pudim${Math.floor(Math.random() * 999)}@pudim`)
        cy.get(passwordTextField).type(password())
        cy.get(registerButton).click()

        cy.get(errorMessage).should('contain', 'Informe um endereço de e-mail válido')
    })

    it('should finish the registering', () => {
        cy.get(emailTextField).type(username())
        cy.get(passwordTextField).type(password())
        cy.get(registerButton).click()
        cy.get(accountDetailsButton).click()
        cy.get(accountFirstNameTextField).type(firstName)
        cy.get(accountLastNameTextField).type(lastName)
        cy.get(displayNameTextField).type(displayName)
        cy.get(saveChangesButton).click()

        cy.get(successAlert).should('exist')
    })
})