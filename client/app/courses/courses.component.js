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
  constructor() {
    'ngInject'
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
}

export default {
  bindings: {
    //inputs
    courses: '<',
    searchEnabled: '<'

    //outputs
  },
  template,
  controller: CoursesController
};
