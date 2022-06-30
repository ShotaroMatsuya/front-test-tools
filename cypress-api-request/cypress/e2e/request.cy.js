/// <reference types="Cypress" />

describe('Request command suite', () => {
  it('Get request', () => {
    cy.request('GET', 'http://localhost:8080/todos').then(response => {
      cy.log(response.status);
      cy.log(response.statusText);
      cy.log(response.duration);
      cy.log(response.headers);
      cy.log(response.body);

      expect(response.status).to.be.eq(200);
      expect(response.duration).to.be.below(20000);
      expect(response.body[0].isComplete).to.be.false;
    });
  });
  it('Get request with params', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/todos',
      qs: { id: 1 },
    }).then(response => {
      cy.log(response.statusText);
      expect(response.body[0].isComplete).to.be.false;
    });
  });
});
