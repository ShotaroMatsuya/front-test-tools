/// <reference types="Cypress" />

describe('Todo UI testing ', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should add a new todo correctly', () => {
    // cy.intercept('POST', 'http://localhost:8080/todos','hello');

    cy.intercept('POST', 'http://localhost:8080/todos').as('postRequest');
    // cy.get('.todo-input').type('First Todo').type('{enter}');
    cy.addNewTodo('First Todo');
    cy.wait('@postRequest').then(xhr => {
      expect(xhr.request.body.name).to.eql('First Todo');
    });
    cy.get('.todo-item').last().should('contain.text', 'First Todo');
    // cy.log('hello github integration');
  });

  it('should be able to toggle the status of a todo correctly', () => {
    cy.addNewTodo('Second Todo');
    cy.get('.todo-checkbox').check().should('be.checked');
    cy.get('.todo-checkbox').uncheck().should('not.be.checked');
  });

  it('should delete a todo correctly', () => {
    cy.addNewTodo('Third');
    cy.get('.delete-item').click();
  });

  it('should not add an empty todo', () => {
    cy.addNewTodo('');
  });

  afterEach(() => {
    cy.get('body').then($el => {
      if ($el.find('.delete-item').length > 0) {
        cy.get('.delete-item').click({ multiple: true });
      }
    });
  });
});
