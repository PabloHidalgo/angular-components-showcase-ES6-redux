import { coursesSelector, topFavouriteCoursesSelector } from '../selectors/courses';

const template = `
  <search-box
    ng-if='$ctrl.searchEnabled'
    title='Search your course...'
    on-change='$ctrl.search($event.text);'>
  </search-box>

  <course-gallery
    layout='row' layout-wrap
    courses='$ctrl.courses'
    filter='$ctrl.filter'>
  </course-gallery>
`;

class CoursesController {
  constructor($ngRedux, $scope) {
    'ngInject'

    let disconnect = $ngRedux.connect(this.mapStateToThis(this.type))(this);
    $scope.$on('$destroy', () => disconnect());
  }

  $onInit() {
    this.filter = '';
    this.searchEnabled = true;

    console.log('CoursesController::$onInit');
  }

  search(value) {
    this.filter = value;

    console.log('CourseGalleryController::search()');
  }

  mapStateToThis(type) {
    return function (state) { //<-- continuar por aquí
      console.log('coursesSelector');

      return {
        courses: coursesSelector(state)
      };
    };
  }
}

class TopFavouriteCoursesController extends CoursesController {
  constructor($ngRedux, $scope) {
    super($ngRedux, $scope);
  }

  mapStateToThis(state) {
    return {
      courses: topFavouriteCoursesSelector(state)
    };
  }
}

export default {
  bindings: {
    //inputs
    courses: '<',
    searchEnabled: '<',
    type: '<'

    //outputs
  },
  template,
  controller: CoursesController
};
