import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

// eslint-disable-next-line no-unused-vars
const getRows = (courses) => courses
  .sort((a, b) => {
    let ret = 0;
    if (a.university > b.university) ret = -1;
    else if (a.university < b.university) ret = 1;
    else if (a.number > b.number) ret = 1;
    else if (a.number < b.number) ret = -1;
    return ret;
  })
  .map((course, idx) => (
    <Course
      data={course}
      key={course.title}
      last={idx === courses.length - 1}
    />
  ));

// eslint-disable-next-line no-unused-vars
const Courses = ({ data = [] }) => (
  <div className="courses">
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
