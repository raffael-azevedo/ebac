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
Cypress.Commands.add('cadastrarUsuario', (nome, email, senha, adm) => {
    cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": adm
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('editarUsuario', (id, nome, email, senha, adm) => {
    cy.request({
        method: 'PUT',
        url: `/usuarios/${id}`,
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": adm
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('deletarUsuario', (id) => {
    cy.request({
        method: 'DELETE',
        url: `/usuarios/${id}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('token', (email, password) => { 
    cy.request({
        method: 'POST',
        url: "/login",
        body: {
          "email": email,
          "password": password
        }
      }).then(response => {
        return response.body.authorization
      })
 })

 Cypress.Commands.add('cadastrarProduto', (nomeProduto, preco, descricaoProduto, quantidade, token) => {
    cy.request({
        method: 'POST',
        url: '/produtos',
        body: {
            "nome": nomeProduto,
            "preco": preco,
            "descricao": descricaoProduto,
            "quantidade": quantidade
          },
        headers: {
            'authorization': token
        },
        failOnStatusCode: false
    })
 })