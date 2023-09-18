import { faker } from '@faker-js/faker';
import perfil from '../fixtures/perfil.json'

const baseUrl = 'minha-conta/';
const validUsername = perfil.username
const validPassword = perfil.password

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

    it.only('should login successfully', () => {
        cy.get(loginTextField).type(validUsername)
        cy.get(passwordTextField).type(validPassword)
        cy.get(loginButton).click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('should login using fixtures', () => {
        cy.fixture('perfil').then(dados => {
            cy.get(loginTextField).type(dados.username)
            cy.get(passwordTextField).type(dados.password)
            cy.get(loginButton).click()
            cy.get('.page-title').should('contain', 'Minha conta')
        })
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