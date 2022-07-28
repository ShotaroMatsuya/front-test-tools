import * as LoginComponent from '../components/login_component';
import * as HeaderComponent from '../components/header_component';
import * as CourseComponent from '../components/course_component';
import * as Utils from '../support/utils';

describe('Test all login functionalities', () => {
  beforeEach(() => {
    Utils.visitAPage('login');
  });

  it('login with valid email and password for a normal user', () => {
    LoginComponent.performLogin('user', 'user');
    HeaderComponent.coursesButton().click();
    HeaderComponent.logoutButton().should('be.visible');
  });
  it('should login correctly as admin user', () => {
    LoginComponent.performLogin('admin', 'admin');
    HeaderComponent.coursesButton().click();

    HeaderComponent.logoutButton().should('be.visible');
    CourseComponent.deleteButton().should('be.visible');
  });
});
