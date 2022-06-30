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
  it('POST request', () => {
    cy.request('POST', 'http://localhost:8080/todos', {
      name: 'test1',
      isComplete: false,
    }).then(response => {
      expect(response.status).to.eq(201);
    });
  });
  it('PUT request', () => {
    cy.request('PUT', 'http://localhost:8080/todos/1', {
      name: 'Study Cypress',
      id: 1,
      isComplete: true,
    });
  });
  it('DELETE request', () => {
    cy.request('DELETE', 'http://localhost:8080/todos/2');
  });

  it.only('Secure API request', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/courses',
      // headers: {
      //   Authorization:
      //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3Rhcm9AdGVzdC5jb20iLCJpYXQiOjE2NTY2MDM4OTAsImV4cCI6MTY1NjYwNzQ5MCwic3ViIjoiNSJ9.ylweTfCko1a0b-I1aCxls--mS0WA1Xn9ZEhKoT9xtag',
      // },
      auth: {
        bearer:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3Rhcm9AdGVzdC5jb20iLCJpYXQiOjE2NTY2MDM4OTAsImV4cCI6MTY1NjYwNzQ5MCwic3ViIjoiNSJ9.ylweTfCko1a0b-I1aCxls--mS0WA1Xn9ZEhKoT9xtag',
      },
    });
  });
});
