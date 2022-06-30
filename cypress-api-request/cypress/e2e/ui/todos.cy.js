/// <reference types="Cypress" />

describe('Todo UI testing ', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should add a new todo correctly', () => {
    // cy.get('.todo-input').type('First Todo').type('{enter}');
    cy.get('.todo-input').type('First Todo{enter}');
    cy.get('.success').should('be.visible');
    cy.get('.todo-item').last().should('contain.text', 'First Todo');
  });

  afterEach(() => {
    cy.get('.delete-item').click({ multiple: true });
  });
});
