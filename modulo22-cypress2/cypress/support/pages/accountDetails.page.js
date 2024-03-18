class AccountDetails {
  editAccountDetails(firstName, lastName) {
    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(firstName);
    cy.get("#account_last_name").type(lastName);
    cy.get(".woocommerce-Button").click();
  }
}

export default new AccountDetails();
