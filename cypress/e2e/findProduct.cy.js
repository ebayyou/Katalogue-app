describe('Find product in Katalogue App', () => {
  it('click a button arrow next product and see the next product background change color', () => {
    cy.visit('http://localhost:5173/products/20');

    cy.get('.product__img').should('be.visible');
    cy.get('.product__heading').should('be.visible');
    cy.get('[data-testid="next-product"]').click();

    // Ensure that the background has changed
    cy.get('.men-clothing-lg').should('be.visible');
  });

  it('click a button arrow previous product and see the previous product  background change color', () => {
    cy.visit('http://localhost:5173/products/1');

    cy.get('.product__img').should('be.visible');
    cy.get('.product__heading').should('be.visible');
    cy.get('[data-testid="previous-product"]').click();

    // Ensure that the background has changed
    cy.get('.women-clothing-lg').should('be.visible');
  });

  it('if a user clicks a button arrow next product until found the unavailable product', () => {
    cy.visit('http://localhost:5173/products/4');

    cy.get('.product__img').should('be.visible');
    cy.get('.product__heading').should('be.visible');
    cy.get('[data-testid="next-product"]').click();

    // Ensure that user found the unavailable product
    cy.get('.unvailable-product-lg').should('be.visible');
    cy.get('.error__group').should('be.visible');
  });
});
