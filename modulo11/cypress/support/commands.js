// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preRegister', (email, password, firstName, lastName, displayName) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('#account_display_name').type(displayName)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('addProduct', (produto, size, color) => {
    cy.get(produto).first().click()
    cy.get(`.button-variable-item-${size}`).click()
    cy.get(`.button-variable-item-${color}`).click()
    cy.get('.single_add_to_cart_button').click()
})