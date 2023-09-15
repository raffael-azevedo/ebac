describe('address', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.username, dados.password)
        })
        
    })
    it('should register billing', () => {

    })
})