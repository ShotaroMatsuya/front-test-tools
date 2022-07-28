import * as LoginComponent from '../components/login_component';
import * as HeaderComponent from '../components/header_component';
import * as CourseComponent from '../components/course_component';

describe('Test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('login with valid email and password for a normal user', () => {
    LoginComponent.emailField().type('user');
    LoginComponent.passwordFiled().type('user');
    LoginComponent.loginButton().click();
    cy.get('[href="/courses"]').click();
    cy.url().should('contain', '/courses');
    HeaderComponent.logoutButton().should('be.visible');
  });
  it('should login correctly as admin user', () => {
    LoginComponent.emailField().type('admin');
    LoginComponent.passwordFiled().type('admin');
    LoginComponent.loginButton().click();
    cy.get('[href="/courses"]').click();
    cy.url().should('contain', '/courses');

    HeaderComponent.logoutButton().should('be.visible');
    CourseComponent.deleteButton().should('be.visible');
  });
});
