const LOAD_COURSES = 'angularjs-redux-showcase/courses/LOAD_COURSES';
const LIKE_COURSE = 'angularjs-redux-showcase/courses/LIKE';
const ENROLL_COURSE = 'angularjs-redux-showcase/courses/ENROLL';

const INITIAL_STATE = [];

export const CoursesActions = ($http) => {
  'ngInject';

  const loadCourses = () => {
    return (dispatch) => {
      $http.get('http://localhost:3000/courses')
        .then(response => response.data)
        .then(payload => ({ type: LOAD_COURSES, payload}))
        .then(action => dispatch(action));
    };
  }

  const likeCourse = (id) => {
    return {
      type: LIKE_COURSE,
      payload: {
        id: parseInt(id, 10)
      }
    };
  }

  const enrollCourse = (id) => {
    return {
      type: ENROLL_COURSE,
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

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case LOAD_COURSES:
      return payload;
    default:
      return state;
  }
}

// const ADD = 'angularjs-redux-showcase/contacts/ADD';
// const UPDATE = 'angularjs-redux-showcase/contacts/UPDATE';
// const DELETE = 'angularjs-redux-showcase/contacts/DELETE';
//
// export const INITIAL_STATE = [];
//
// export default function reducer(state = INITIAL_STATE, {type, payload}) {
//   switch (type) {
//     case ADD:
//       return [
//         ...state,
//         {name: payload.contact.name, email: payload.contact.email}
//       ];
//       break;
//     case UPDATE:
//       return state.map(contact => {
//         if (contact.id !== payload.contact.id) return contact;
//         return {
//           ...contact,
//           name: payload.contact.name,
//           email: payload.contact.email
//         };
//       });
//       break;
//     case DELETE:
//       return state.filter(contact => {
//         return contact.id !== payload.id;
//       });
//       break;
//     default:
//       return state;
//   }
// }
//
// export function addContact(contact) {
//   return {
//     type: ADD,
//     payload: {
//       contact
//     }
//   };
// }
//
// export function updateContact(contact) {
//   return {
//     type: UPDATE,
//     payload: {
//       contact
//     }
//   };
// }
//
// export function deleteContact(id) {
//   return {
//     type: DELETE,
//     payload: {
//       id: parseInt(id, 10)
//     }
//   };
// }
