/// <reference types="Cypress" />

// Mocha

describe('Login feature Test', () => {
  // hooks
  // before(() => {
  //   cy.log('Run the server locally');
  // });
  // after(() => {
  //   cy.log('kill the server');
  // });
  // beforeEach(() => {
  //   cy.log('navigate to login page');
  // });

  it('should visit the login page correctly', () => {
    // cy.visit('https://example.cypress.io');
    // cy.visit('cypress/index.html');
    cy.visit('/');
  });

  ['macbook-15', 'iphone-x'].forEach(size => {
    it('should visit the login page correctly on ' + size, () => {
      // cy.viewport(500, 750);
      cy.viewport(size);
      cy.visit('/');
      cy.get('css selector');
    });
  });

  it.only('should visit the login page correctly on ', () => {
    cy.visit('cypress/index.html');
    // cy.get('#header1'); by id name
    // cy.get('h1.main.header1'); //by class name
    cy.get('.course-list > .list1'); // get children dom 1
    cy.get('.course-list').children('.list1'); //get children dom 2
    cy.get('.course-container').find('.list1');

    cy.get('li').first();
    cy.get('li').last();
    cy.get('li').eq(0);

    cy.get('li').filter('.web');

    cy.get('.course-list .list1').next();
    cy.get('.course-list .list3').prev();
    cy.get('.course-list .list2').nextUntil('.list7');

    cy.contains('Selenium'); // sensitive
  });
});
