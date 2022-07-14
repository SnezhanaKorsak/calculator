describe('history', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('push value to displayHistory', () => {
    const example = ' 1 x 2 + 3 +';

    cy.get('button').contains('1').click();
    cy.get('button').contains('x').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('+').click();

    cy.get('#display-history').each(($btn) => {
      cy.wrap($btn).should('have.text', example);
    });
  });

  it('push value to history', () => {
    const example = ' 5 x 2 + 3 ';

    cy.get('button').contains('5').click();
    cy.get('button').contains('x').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();

    cy.get('#history-list').each(($btn) => {
      cy.wrap($btn).should('have.text', example);
    });
  });

  it('toggle visible the history', () => {
    cy.get('#history').should('be.visible');
    cy.get('button').contains('◀').click();
    cy.get('#history').should('not.be.visible');
    cy.get('button').contains('▶').click();
    cy.get('#history').should('be.visible');
  });

  it('clear all history', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('=').click();

    cy.get('#history > div').should('not.be.empty');
    cy.visit('/settings');
    cy.get('button').contains('Clear All History').click();
    cy.visit('/');
    cy.get('#history-list').should('be.empty');
  });
});
