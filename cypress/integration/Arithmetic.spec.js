describe('Basic arithmetic operation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('checking the summation', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('6').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 16);
  });
});
