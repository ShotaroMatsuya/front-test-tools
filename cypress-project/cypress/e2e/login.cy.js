import * as LoginComponent from '../components/login_component';
import * as HeaderComponent from '../components/header_component';
import * as CourseComponent from '../components/course_component';

describe('Test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('login with valid email and password for a normal user', () => {
    LoginComponent.performLogin('user', 'user');
    cy.get('[href="/courses"]').click();
    cy.url().should('contain', '/courses');
    HeaderComponent.logoutButton().should('be.visible');
  });
  it('should login correctly as admin user', () => {
    LoginComponent.performLogin('admin', 'admin');
    cy.get('[href="/courses"]').click();
    cy.url().should('contain', '/courses');

    HeaderComponent.logoutButton().should('be.visible');
    CourseComponent.deleteButton().should('be.visible');
  });
});
