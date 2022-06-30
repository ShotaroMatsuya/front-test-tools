describe.only('filter functionality test cases', () => {
  before(() => {
    cy.addDummyTodos();
    cy.visit('/');
  });
  it('should filter out the complete todos correctly', () => {
    cy.contains('Complete').click();
    cy.url().should('contain', '/complete');
    cy.get('.todo-checkbox').each(element => {
      cy.wrap(element).should('be.checked');
    });
  });
  it('should filter out the active todos correctly', () => {
    cy.contains('Active').click();
    cy.url().should('contain', '/active');
    cy.get('.todo-checkbox').each(element => {
      cy.wrap(element).should('not.be.checked');
    });
  });
  after(() => {
    cy.get('body').then($el => {
      if ($el.find('.delete-item').length > 0) {
        cy.get('.delete-item').click({ multiple: true });
      }
    });
  });
});
