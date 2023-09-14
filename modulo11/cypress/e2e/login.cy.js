import { faker } from '@faker-js/faker';

const baseUrl = 'http://lojaebac.ebaconline.art.br/minha-conta/';
const validUsername = 'aluno_ebac@teste.com'
const validPassword = 'teste@teste.com'

let invalidUsername = faker.internet.email()
let invalidPassword = faker.internet.password()
// locators
const loginTextField = '#username'
const passwordTextField = '#password'
const loginButton = '.woocommerce-form > .button'
const errorMessage = '.woocommerce-error > li'


describe('login tests', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it('should login successfully', () => {
        cy.get(loginTextField).type(validUsername)
        cy.get(passwordTextField).type(validUsername)
        cy.get(loginButton).click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('should show an error message when invalid username', () => {
        cy.get(loginTextField).type(invalidUsername)
        cy.get(passwordTextField).type(validPassword)
        cy.get(loginButton).click()
        cy.get(errorMessage).should('contain', 'e-mail desconhecido')
    })
    it('should show an error message when invalid password', () => {
        cy.get(loginTextField).type(validUsername)
        cy.get(passwordTextField).type(invalidPassword)
        cy.get(loginButton).click()
        cy.get(errorMessage).should('contain', 'Perdeu a senha?')
    })
})