import { faker } from '@faker-js/faker'
import usersSchema from "../contracts/users.contract";

describe('Testes da Funcionalidade Usuários', () => {
    let usuario
    let usuarioAtualizado
    let userId

    const gerarUsuario = function () {
        return {
            "nome": faker.person.firstName(),
            "email": faker.internet.email(),
            "password": "teste@teste",
            "administrador": "true"
        }
    }

    it('Deve validar contrato de usuários', () => {
        cy.request('/usuarios').then(response => {
            expect(response.body).to.have.property('usuarios')
            return usersSchema.validateAsync(response.body)
        })    
    });

    it('Deve listar usuários cadastrados', () => {
        cy.request('/usuarios').then(response => {
            expect(response.body).to.have.property('usuarios')
        })   
    });

    it('Deve cadastrar um usuário com sucesso', () => {
        usuario = gerarUsuario()
        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.password, usuario.administrador)
        .then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.contain('sucesso')
            userId = response.body._id
        })
    });

    it('Deve validar um usuário com email inválido', () => {
         cy.cadastrarUsuario(usuario.nome, `www.pudim${Math.floor(Math.random() * 1000)}.com.br`, usuario.password, usuario.administrador)
         .then(response => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.contain('email deve ser um email válido')
         }) 
    });

    it('Deve editar um usuário previamente cadastrado', () => {
        usuarioAtualizado = gerarUsuario()
         cy.editarUsuario(userId, usuarioAtualizado.nome, usuarioAtualizado.email, usuarioAtualizado.password, usuarioAtualizado.administrador)
         .then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("Registro alterado com sucesso")
         }) 
    });

    it('Deve deletar um usuário previamente cadastrado', () => {
        cy.deletarUsuario(userId)
        .then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("Registro excluído com sucesso")
        })
    });


});