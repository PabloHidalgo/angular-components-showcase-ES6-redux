import { createSelector } from 'reselect';

const sortByTitle = (a, b) => (a.title > b.title) ? 1 :
                            ((b.title > a.title) ? -1 : 0);
const sortByLikes = (a, b) => a.likes - b.likes;
const sortByEnrolls = (a, b) => a.enrolls - b.enrolls;

const coursesSelector = state => state.courses.sort(sortByTitle);

const favouriteCoursesSelector = createSelector(
  [coursesSelector],
  (courses) => {
    return courses.filter(course => course.likes > 0).sort(sortByLikes);
  }
);

const myFavouriteCoursesSelector = createSelector(
  [favouriteCoursesSelector],
  (favouriteCourses) => {
    return favouriteCourses.filter(course => course.liked);
  }
);

const topFavouriteCoursesSelector = createSelector(
  [favouriteCoursesSelector],
  (favouriteCourses) => {
    return favouriteCourses.slice(0, 10);
  }
);

// const enrolledCoursesSelector = createSelector(
//   [coursesSelector],
//   (courses) => {
//     return courses.filter(course => course.enrolled);
//   }
// );

export default {
  coursesSelector,
  myFavouriteCoursesSelector,
  topFavouriteCoursesSelector
};
