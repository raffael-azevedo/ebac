describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.username, dados.password)
        })
        cy.visit('produtos/page/9/')
        });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        const lista = [1,2,3,5]
        for (const i in lista) {
            cy.get('[class="product-block grid"]').eq(lista[i]).click()
            cy.addProductToCart('M')
            if(i <= 2) {
                cy.visit('produtos/page/9/')
            }
        }
        cy.get('.woocommerce-message > .button').click()
        cy.proceedCheckout()
        cy.placeOrder()
        cy.wait(6000)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})

