import { loadNg1Module, ngmodule } from '../bootstrap/ngmodule';

import courses from './courses.component';
import courseActions from './components/course-actions';
import courseCard from './components/course-card';
import courseGallery from './components/course-gallery';

import { coursesState, coursesTopFavouritesState, coursesTopEnrollmentsState,
  coursesMyFavouritesState, coursesMyEnrollmentsState } from './courses.states';

const coursesModule = {
  components: { courses, courseActions, courseCard, courseGallery },
  states: [ coursesState, coursesTopFavouritesState, coursesTopEnrollmentsState,
            coursesMyFavouritesState, coursesMyEnrollmentsState ]
};

loadNg1Module(ngmodule, coursesModule);
