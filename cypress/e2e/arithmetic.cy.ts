describe('basic arithmetic operation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check the sum function', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 3);
  });

  it('check the subtraction function', () => {
    cy.get('button').contains('9').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 5);
  });

  it('check the multiplication function', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('x').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 80);
  });

  it('check the division function', () => {
    cy.get('button').contains('9').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 31);
  });

  it('(2 + 2) * 2 = 8', () => {
    cy.get('button').contains('(').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains(')').click();
    cy.get('button').contains('x').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 8);
  });

  it('25 % 3 = 4', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('%').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 1);
  });

  it('should remove symbols', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('CE').click();

    cy.get('input').should('have.value', 0);
  });

  it('should remove one symbol', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('←').click();

    cy.get('input').should('have.value', 12);
  });
});
