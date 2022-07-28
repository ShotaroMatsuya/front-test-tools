import * as CourseComponent from '../components/course_component';
import * as Utils from '../support/utils';

describe('Check courses functionality', () => {
  context('Check the functionality for an admin user', () => {
    beforeEach(() => {
      Utils.loginWithAPI('admin', 'admin');
      Utils.visitAPage('courses');
    });
    it('admin user should see the delete buttons', () => {
      CourseComponent.deleteButton().should('be.visible');
    });

    it('should be able to add a new task correctly', () => {
      CourseComponent.newCourseInput().type('Learn Selenium');
      CourseComponent.newCourseButton().click();
      CourseComponent.deleteButton().should('have.length', 3);
    });
    it('should be able to delete a task', () => {
      CourseComponent.deleteButton().last().click();
      CourseComponent.deleteButton().should('have.length', 2);
    });
  });
});
