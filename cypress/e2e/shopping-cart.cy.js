describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/search');
  });
  it('users can add products to the cart', () => {
    cy.get('[data-test="product-label"]').eq(0).click();
    cy.get('[aria-label="Add item to cart"]').click();
    cy.getBySel('cart-list').get('span').contains('logitech');
  });

  it.only('users can add and remove product to the cart', () => {
    cy.getBySel('product-label').eq(0).click();
    cy.get('[aria-label="Add item to cart"]').click();
    cy.getBySel('cart-list').get('span').contains('logitech');
    cy.get('[aria-label="Close cart"]').click();

    cy.getBySel('search-input').type('hator{enter}');
    cy.getBySel('product-label').click();
    cy.get('[aria-label="Add item to cart"]').click();

    cy.getBySel('cart-list').within(() => {
      cy.get('span').contains('logitech');
      cy.get('span').contains('hator');
    });
  });
});
