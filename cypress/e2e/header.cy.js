describe('Header', () => {
  it('links to the correct pages', () => {
    cy.visit('/search');
    // cy.get('[data-test="logo"]').click()
    cy.getBySel('logo').click();
    cy.location('pathname').should('eq', '/');
  });

  it.only('the search bar returns the correct search results', () => {
    cy.visit('/');
    cy.getBySel('search-input').type('hator{enter}');
    cy.getBySel('product-label').within(() => {
      cy.contains('hator');
      cy.get('p').contains('₴20.00');
    });
  });
});
