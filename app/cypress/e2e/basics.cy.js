/// <reference types="Cypress" />

// Mocha

describe('Login feature Test', () => {
  // hooks
  before(() => {
    cy.log('Run the server locally');
  });
  after(() => {
    cy.log('kill the server');
  });
  beforeEach(() => {
    cy.log('navigate to login page');
  });

  it('should visit the login page correctly', () => {
    // cy.visit('https://example.cypress.io');
    cy.visit('cypress/index.html');
  });
});
