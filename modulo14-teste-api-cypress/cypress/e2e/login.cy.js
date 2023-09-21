describe('template spec', () => {
  it('Deve fazer login', () => {
    cy.request({
      method: 'POST',
      url: "/login",
      body: {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.message).to.contain("Login realizado")
      cy.log(response.body.authorization)
    })
  })
  it.only('deve retornar todos os usuários', () => {
    cy.request('/usuarios')
  })
})