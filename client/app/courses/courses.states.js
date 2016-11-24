// TODO: CREAR ESTADO BASE Y CAMBIAR SÓLO EL RESOLVE

const coursesState = {
  name: 'courses',
  url: '/courses',
  parent: 'app',
  component: 'courses',
  resolve: {
    title: () => 'COURSES LIST'
  }
};

const coursesTopFavouritesState = {
  name: 'courses-top-favourites',
  url: '/courses/top-favourites',
  parent: 'app',
  component: 'courses',
  resolve: {
    title: () => 'COURSES TOP FAVOURITES'
  }
};

const coursesTopEnrollmentsState = {
  name: 'courses-top-enrollments',
  url: '/courses/top-enrollments',
  parent: 'app',
  component: 'courses',
  resolve: {
    title: () => 'COURSES TOP ENROLLMENTS'
  }
};

const coursesMyFavouritesState = {
  name: 'courses-my-favourites',
  url: '/courses/my-favourites',
  parent: 'app',
  component: 'courses',
  resolve: {
    title: () => 'MY FAVOURITES COURSES'
  }
};

const coursesMyEnrollmentsState = {
  name: 'courses-my-enrollments',
  url: '/courses/my-enrollments',
  parent: 'app',
  component: 'courses',
  resolve: {
    title: () => 'COURSES I\'M ENROLLED IN'
  }
};

export default {
  coursesState,
  coursesTopFavouritesState,
  coursesTopEnrollmentsState,
  coursesMyFavouritesState,
  coursesMyEnrollmentsState
};
