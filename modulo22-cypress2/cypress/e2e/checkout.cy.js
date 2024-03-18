import { faker } from "@faker-js/faker";

const generateUser = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    userEmail: faker.internet.email(),
    userPassword: faker.internet.password(),
    country: "Brasil",
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: "Rio Grande do Sul",
    zipCode: faker.location.zipCode("########"),
    phone: faker.string.numeric(11),
  };
};

let newUser = generateUser();

describe("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit("/minha-conta");
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    cy.preRegister(
      newUser.userEmail,
      newUser.userPassword,
      newUser.firstName,
      newUser.lastName,
      "boi_bandido"
    );
    cy.visit("produtos/page/11/");
    const lista = [0, 1, 3, 5];
    for (const i in lista) {
      cy.get('[class="product-block grid"]').eq(lista[i]).click();
      cy.addProduct("M" /*, "Purple"*/);
      if (i <= 2) {
        cy.visit("produtos/page/10/");
      }
    }
    cy.get(".woocommerce-message > .button").click();
    cy.proceedCheckout();
    cy.addBillingDetails(
      newUser.address,
      newUser.city,
      newUser.state,
      newUser.zipCode,
      newUser.phone
    );
    cy.placeOrder();
    cy.wait(6000);
    cy.get(".woocommerce-notice").should(
      "contain",
      "Obrigado. Seu pedido foi recebido."
    );
  });
});
