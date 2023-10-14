describe('Home Page', () => {
  it('displays all products on the home page', () => {
    cy.visit('/search');
    cy.get('[data-test="product-label"]')
      .eq(0)
      .within(() => {
        cy.contains('logitech');
        cy.get('p').contains('₴10.00');
      });

    cy.get('[data-test="product-label"]')
      .eq(1)
      .within(() => {
        cy.contains('hator');
        cy.get('p').contains('₴20.00');
      });
  });
});
