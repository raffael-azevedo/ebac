class RegisterPage {
  registerNewAccount(email, password) {
    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type(password);
    cy.get(":nth-child(4) > .button").click();
  }
  login(email, password) {
    cy.get("#username").type(email);
    cy.get("#password").type(password);
    cy.get(".woocommerce-form > .button").click();
  }
}

export default new RegisterPage();
