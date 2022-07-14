describe('theme', () => {
  beforeEach(() => {
    cy.visit('/settings');
  });

  it('select theme', () => {
    cy.get('select').select('Light theme').should('have.value', 'light');
    cy.get('select').select('Dark theme').should('have.value', 'dark');
    cy.get('select').select('Colored theme').should('have.value', 'colored');
  });

  it('change theme', () => {
    cy.get('select').select('Light theme').should('have.value', 'light');
    cy.get('#card').should('have.css', 'background-color', 'rgb(232, 232, 232)');

    cy.get('select').select('Dark theme').should('have.value', 'dark');
    cy.get('#card').should('have.css', 'background-color', 'rgb(18, 18, 18)');
  });
});
