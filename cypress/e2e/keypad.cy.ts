describe('keypad buttons', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check keypad buttons', () => {
    const example = ' 0 - 1 + 2 x 3456789 /  (  )';

    cy.get('button').contains('0').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('x').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('6').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('9').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('(').click();
    cy.get('button').contains(')').click();

    cy.get('#display-history').should('have.text', example);
  });
});
