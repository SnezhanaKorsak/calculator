describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('homeCC page', () => {
    cy.get('#navigation a:nth-child(2)').click();
    cy.url().should('eq', 'http://localhost:3000/homeCC');
  });

  it('settingsFC page', () => {
    cy.get('#navigation a:nth-child(3)').click();
    cy.url().should('eq', 'http://localhost:3000/settings');
  });

  it('settingsCC page', () => {
    cy.get('#navigation a:nth-child(4)').click();
    cy.url().should('eq', 'http://localhost:3000/settingsCC');
  });

  it('homeFC page', () => {
    cy.get('#navigation a:nth-child(1)').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
