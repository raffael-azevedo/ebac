import { faker } from '@faker-js/faker'
import contrato from '../contracts/produtos.contract'

describe('produtos', () => {
    let token
    let productId
    let produto

    const gerarProduto = function () {
        return {
            "nome": faker.commerce.product(),
            "descricao": faker.commerce.productDescription(),
            "quantidade": faker.number.int(),
            "preco": faker.number.int()
        }
    }


    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn } )
        produto = gerarProduto()
    })

    it('deve validar o contrato de produtos', () => {
        cy.request('/produtos').then(response => {
            expect(response.body).to.have.property('produtos')
            return contrato.validateAsync(response.body)
        })
    })

    it('deve listar os produtos', () => {
        cy.request({
            method: 'GET', 
            url: '/produtos'
        }).then(response => {
            cy.log(response.body)
            expect(response.duration).to.be.lessThan(100)
        })
    })

    it('deve cadastrar produto', () => {
        cy.log(produto)
        cy.cadastrarProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, token).then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.contain('sucesso')
            productId = response.body._id
        })
    })

    it('deve editar um produto cadastrado', () => {
        cy.request({
            method: 'PUT',
            url: `/produtos/${productId}`,
            body: {
                "nome": produto.nome,
                "preco": produto.preco,
                "descricao": produto.descricao,
                "quantidade": produto.quantidade
            },
            headers: {
                "authorization": token
            }
        }).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.contain('sucesso')
        })
    })

    it('deve deletar um produto cadastrado', () => {
        cy.request({
            method: 'DELETE',
            url: `/produtos/${productId}`,
            headers: {
                "authorization": token
            }
        }).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.contain('sucesso')
        })
    })
})