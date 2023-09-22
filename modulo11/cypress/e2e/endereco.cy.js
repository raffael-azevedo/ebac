import enderecoPage from "../support/page-objects/endereco.page"
import dadosUsuario from "../fixtures/endereco.json"

describe('address', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.username, dados.password)
        })
        
    })
    it('should register billing', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosUsuario[1].firstName,
            dadosUsuario[1].lastName,
            dadosUsuario[1].country,
            dadosUsuario[1].address,
            dadosUsuario[1].city,
            dadosUsuario[1].state,
            dadosUsuario[1].zipCode,
            dadosUsuario[1].phone,
            dadosUsuario[1].email)
    })
})