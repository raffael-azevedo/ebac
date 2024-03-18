import registerPage from "../support/pages/register.page";
import accountDetailsPage from "../support/pages/accountDetails.page";
import billingAddressPage from "../support/pages/billingAddress.page";
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

describe("register flow", () => {
  beforeEach(() => {
    cy.visit("/minha-conta");
  });
  it("should register a new account", () => {
    registerPage.registerNewAccount(newUser.userEmail, newUser.userPassword);
    cy.get(".woocommerce-MyAccount-content > :nth-child(3)").should(
      "contain.text",
      "A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta."
    );
  });
  it("should edit the account details", () => {
    registerPage.login(newUser.userEmail, newUser.userPassword);
    cy.get(".woocommerce-MyAccount-content > :nth-child(3)").should(
      "contain.text",
      "A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta."
    );
    accountDetailsPage.editAccountDetails(newUser.firstName, newUser.lastName);
    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso"
    );
  });
  it("should edit the billing address", () => {
    registerPage.login(newUser.userEmail, newUser.userPassword);
    billingAddressPage.editBillingAddress(
      newUser.firstName,
      newUser.lastName,
      newUser.country,
      newUser.address,
      newUser.city,
      newUser.state,
      newUser.zipCode,
      newUser.phone,
      newUser.userEmail
    );
  });
});
