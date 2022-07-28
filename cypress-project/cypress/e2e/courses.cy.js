import * as LoginComponent from '../components/login_component';
import * as CourseComponent from '../components/course_component';
import * as Utils from '../support/utils';
import * as HeaderComponent from '../components/header_component';

describe('Check courses functionality', () => {
  context('Check the functionality for an admin user', () => {
    beforeEach(() => {
      Utils.loginWithAPI('admin', 'admin');
      Utils.visitAPage('courses');
    });
    it('admin user should see the delete buttons', () => {
      CourseComponent.deleteButton().should('be.visible');
    });
  });
});
