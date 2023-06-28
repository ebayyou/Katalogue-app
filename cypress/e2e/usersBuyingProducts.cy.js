/* eslint-disable cypress/no-unnecessary-waiting */
describe('Flow Application User buys the products', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/products/1');

    cy.get('.product__img').should('be.visible');
    cy.get('.product__heading').should('be.visible');
    cy.get('[data-testid="add-to-cart"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Successfully added product to cart.');
    });
  });

  it('Users cannot add products to cart twice', () => {
    cy.get('[data-testid="add-to-cart"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Failed to add product to cart, Product is already in the cart.'
      );
    });
  });

  it('user buying product in katalogue app', () => {
    cy.wait(4000);

    // go to page cart-product
    cy.get('.navigation__cart').click();
    cy.get('.product__item__cart').should('be.visible');
    cy.get('[data-testid="add-count"]').click();

    // go to page confirm-order
    cy.get('[data-testid="buys-product"]').click();
    cy.wait(2000);
    cy.get('[data-testid="confirm-list-item"]').should('be.visible');

    // go to page greetings
    cy.get('[data-testid="confirm-order"]').click();
    cy.get('.greeting-wrap').should('be.visible');
    cy.get('.heading__text-gradient').contains('Thanks For Order!!!');

    // go back to product page
    cy.get('.button__action').contains('Back to Product').click();
  });

  it('user buying multiple products in katalogue app', () => {
    cy.wait(4000);

    cy.get('[data-testid="next-product"]').click();
    cy.get('[data-testid="add-to-cart"]').click();
    cy.get('[data-testid="next-product"]').click();
    cy.get('[data-testid="add-to-cart"]').click();

    // go to page cart-product
    cy.get('.navigation__cart').click();
    cy.get('.product__item__cart').should('be.visible');
    cy.get('[data-testid="add-count"]').click({ multiple: true });

    // go to page confirm-order
    cy.get('[data-testid="buys-product"]').click();
    cy.wait(2000);
    cy.get('[data-testid="confirm-list-item"]').should('be.visible');

    // go to page greetings
    cy.get('[data-testid="confirm-order"]').click();
    cy.get('.greeting-wrap').should('be.visible');
    cy.get('.heading__text-gradient').contains('Thanks For Order!!!');

    // go back to product page
    cy.get('.button__action').contains('Back to Product').click();
  });
});
