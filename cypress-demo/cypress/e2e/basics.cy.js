/// <reference types="Cypress" />

// Mocha

describe.skip('Visit Command', () => {
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
    // set 'baseUrl' in cypress.config.js
    cy.visit('/');
  });

  ['macbook-15', 'iphone-x'].forEach(size => {
    it('should visit the login page correctly on ' + size, () => {
      cy.viewport(500, 750);
      cy.viewport(size);
      // set 'baseUrl' in cypress.config.js
      cy.visit('/');
    });
  });
});

describe.skip('Cypress Selectors', () => {
  it('should visit the login page correctly on ', () => {
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

    cy.get('[data-cy="selenium-course"]');
    cy.get('[type="email"]');

    cy.get('.list3', { timeout: 30000 });
  });
});

describe('Cypress Action', () => {
  it('click()', () => {
    cy.visit('cypress/index.html');
    cy.get('table .invoice-button').eq(0).click('top');
    cy.get('table .invoice-button').click({ multiple: true });

    cy.get('.invoice-button').eq(0).click({ force: true });
  });

  it('type()', () => {
    cy.visit('cypress/index.html');

    cy.get('#inputEmail').type('expample@gmail.com');

    cy.get('[name="coverdInput"]').type('hello', { force: true, delay: 1000 });
  });

  it('challenge', () => {
    cy.visit('cypress/index.html');

    cy.get('[data-cy="email"]').type('test@gmail.com');
    cy.get('[data-cy="password"]').type('12345678');
    cy.get('[data-cy="login"]').click();
  });

  it('Select()', () => {
    cy.visit('cypress/index.html');
    cy.get('#courses').select('selenium');
  });

  it('check()', () => {
    cy.visit('cypress/index.html');
    cy.get('#Banana').check();
    cy.get('#Banana').uncheck();

    cy.get('[type="checkbox"]').check(['Banana', 'Fries']);
  });

  it('clear()', () => {
    cy.visit('cypress/index.html');

    cy.get('#inputEmail').type('test@gmail.com');
    cy.get('#inputEmail').clear();
  });

  it('double click()', () => {
    cy.visit('cypress/index.html');

    cy.get('.magic-button').rightclick();
    cy.get('.magic-button').dblclick();
  });
  it('blur fucus()', () => {
    cy.visit('cypress/index.html');

    cy.get('.magic-input').focus();
    cy.get('.magic-input').blur();
  });

  it('other actions', () => {
    cy.visit('cypress/index.html');

    cy.get('table .invoice-button').first().trigger('click');
    cy.get('.trigger-button').trigger('mouseover');
    cy.get('.trigger-button').trigger('mouseout');
    cy.get('.trigger-button').trigger('mousedown');
    cy.wait(5000);
    cy.get('.trigger-button').trigger('mouseup');
  });
});

describe('Assertion', () => {
  it('should have text', () => {
    cy.visit('cypress/index.html');
    cy.get('.course-list > .list1').should('have.text', 'Cypress');

    cy.get('.course-list').should('have.contain', 'Cypress');
  });

  it('should be visible', () => {
    cy.visit('cypress/index.html');
    cy.get('.list10').should('have.text', 'sql');

    cy.get('.list10').should('not.be.visible');
  });
  it('should have class', () => {
    cy.visit('cypress/index.html');
    cy.get('#detox').should('have.class', 'mobile');
  });
  it('should have css', () => {
    cy.visit('cypress/index.html');

    cy.get('.trigger-button')
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('.trigger-button')
      .trigger('mouseover')
      .should('have.css', 'background-color')
      .and('eql', 'rgb(255, 0, 0)');
  });
  it('should be enabled', () => {
    cy.visit('cypress/index.html');

    cy.get('[data-cy="email"]').should('be.disabled');
  });
  it('should have an attribute', () => {
    cy.visit('cypress/index.html');

    cy.get('.random-image').should(
      'have.attr',
      'src',
      'https://source.unsplash.com/user/erondu/900x900'
    );
    cy.get('.random-image')
      .should('have.attr', 'src')
      .and('eql', 'https://source.unsplash.com/user/erondu/900x900');
  });

  it('should have a value', () => {
    cy.visit('cypress/index.html');

    cy.get('#inputEmail')
      .type('test@gmail.com')
      .should('have.value', 'test@gmail.com');
  });

  it('exercise', () => {
    cy.visit('cypress/index.html');

    cy.get('#courses').select('selenium');
    cy.get('[data-cy="selenium"]').should('be.selected');
    cy.get('.magic-input').focus();
    cy.get('.magic-input').should('be.focused');
    cy.get('#Banana').check();
    cy.get('#Banana').should('be.checked');
  });
});
