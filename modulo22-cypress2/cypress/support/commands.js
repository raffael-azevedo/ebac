Cypress.Commands.add("login", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get(".woocommerce-form > .button").click();
});

Cypress.Commands.add(
  "preRegister",
  (email, password, firstName, lastName, displayName) => {
    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type(password);
    cy.get(":nth-child(4) > .button").click();
    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(firstName);
    cy.get("#account_last_name").type(lastName);
    cy.get("#account_display_name").type(displayName);
    cy.get(".woocommerce-Button").click();
  }
);

Cypress.Commands.add("addProduct", (/*produto,*/ size, color) => {
  //cy.get(produto).first().click();
  cy.get(`.button-variable-item-${size}`).click();
  cy.get(":nth-child(2) > .value > .variable-items-wrapper > .variable-item")
    .eq(0)
    .click();
  //cy.get(`.button-variable-item-${color}`).click();
  cy.get(".single_add_to_cart_button").click();
});

Cypress.Commands.add("addProductToCart", (size) => {
  cy.get(`.button-variable-item-${size}`).click();
  cy.get(".button-variable-item-Blue").click();
  cy.get(".single_add_to_cart_button").click();
});

Cypress.Commands.add("proceedCheckout", () => {
  cy.get(".checkout-button").click();
});

Cypress.Commands.add("placeOrder", () => {
  cy.get("#terms").click();
  cy.get("#place_order").click();
});

Cypress.Commands.add(
  "addBillingDetails",
  (address, city, state, zipCode, phone) => {
    cy.get("#billing_address_1").type(address);
    cy.get("#billing_city").type(city);
    cy.get("#select2-billing_state-container").click();
    cy.get(".select2-search__field").type(state);
    cy.get("#select2-billing_state-results").first().click();
    cy.get("#billing_postcode").type(zipCode);
    cy.get("#billing_phone").type(phone);
  }
);
