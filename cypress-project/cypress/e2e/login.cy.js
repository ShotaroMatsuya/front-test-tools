describe('Test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('login with valid email and password for a normal user', () => {
    cy.get('[data-cy="email-field"]').type('user');
    cy.get('[data-cy="password-field"]').type('user');
    cy.get('[data-cy="login_button"]').click();
    cy.get('[href="/courses"]').click();
    cy.url().should('contain', '/courses');
    cy.get('[data-cy=signout-button]').should('be.visible');
  });
  it('should login correctly as admin user', () => {
    cy.get('[data-cy="email-field"]').type('admin');
    cy.get('[data-cy="password-field"]').type('admin');
    cy.get('[data-cy="login_button"]').click();
    cy.get('[href="/courses"]').click();
    cy.url().should('contain', '/courses');

    cy.get('[data-cy=signout-button]').should('be.visible');
    cy.get('[data-cy=delete-button]').should('be.visible');
  });
});
