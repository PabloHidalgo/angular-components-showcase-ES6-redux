import * as actions from './action-types.js';

export const CoursesActions = ($http) => {
  'ngInject';

  const loadCourses = () => {
    return (dispatch) => {
      $http.get('http://localhost:3000/courses')
        .then(response => response.data)
        .then(payload => ({ type: actions.LOAD_COURSES, payload}))
        .then(action => dispatch(action));
    };
  }

  const likeCourse = (id) => {
    return {
      type: actions.LIKE_COURSE,
      payload: {
        id: parseInt(id, 10)
      }
    };
  }

  const enrollCourse = (id) => {
    return {
      type: actions.ENROLL_COURSE,
      payload: {
        id: parseInt(id, 10)
      }
    };
  }

  return {
    loadCourses,
    likeCourse,
    enrollCourse
  }
}
