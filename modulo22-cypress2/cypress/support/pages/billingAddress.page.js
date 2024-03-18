class AddressPage {
  editBillingAddress(
    firstName,
    lastName,
    country,
    address,
    city,
    state,
    zipCode,
    phone,
    email
  ) {
    cy.get(".woocommerce-MyAccount-navigation-link--edit-address > a").click();
    cy.get(":nth-child(1) > .title > .edit").click();
    cy.get("#billing_first_name").clear().type(firstName);
    cy.get("#billing_last_name").clear().type(lastName);
    // país
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type(country);
    cy.get("#select2-billing_country-results").first().click();
    cy.get("#billing_address_1").clear().type(address);
    cy.get("#billing_city").clear().type(city);
    // state
    cy.get("#select2-billing_state-container").click();
    cy.get(".select2-search__field").type(state);
    cy.get("#select2-billing_state-results").first().click();
    cy.get("#billing_postcode").clear().type(zipCode);
    cy.get("#billing_phone").clear().type(phone);
    cy.get("#billing_email").clear().type(email);
    cy.get(".button").click();
  }

  editShippingAddress() {
    // elemnentos + ações
  }
}

export default new AddressPage();
