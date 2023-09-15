const baseUrl = 'http://lojaebac.ebaconline.art.br/produtos/';
const validUsername = 'aluno_ebac@teste.com'
const validPassword = 'teste@teste.com'
const productImage = '[class="product-block grid"]'
const mediumSizeButton = '.button-variable-item-M'
const smallSizeButton = '.button-variable-item-S'
const blueColorButton = '.button-variable-item-Blue'
const greenColorButton = '.button-variable-item-Green'
const redColorButton = '.button-variable-item-Red'
const addToCartButton = '.single_add_to_cart_button'
const addedToCartAlert = '.woocommerce-message'

describe('products', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
  })
  it('should select a product from the list', () => {
    cy.get(productImage).first().click()
    cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Abominable Hoodie')
  })

  it('should add a product to the cart', () => {
    cy.get(productImage).first().click()
    cy.get(smallSizeButton).click()
    cy.get(greenColorButton).click()
    cy.get(addToCartButton).click()

    cy.get(addedToCartAlert).should('exist')
  })
})