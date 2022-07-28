import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ course, onDelete, userCanEditCourses }) => (
  <div className="courses-list-container">
    <li>
      <div className="course-list-element">
        <label data-cy="course-name">{course.name}</label>
        {userCanEditCourses && (
          <button
            data-cy="delete-button"
            className="delete button"
            onClick={() => onDelete(course)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  </div>
);

Course.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  userCanEditCourses: PropTypes.bool,
};

export default Course;
