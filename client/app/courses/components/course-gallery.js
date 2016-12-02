const template = `
  <course-card
    flex="50" flex-gt-sm="25"
    data-ng-repeat="course in $ctrl.courses | filter: $ctrl.filter" id="::course.id"
    title="::course.title" content="::course.content" image="::course.image"
    enrolls="course.enrolls" enrolled="course.enrolled"
    likes="course.likes" liked="course.liked">
  </course-card>

  <div layout="column" flex="100" layout-margin layout-padding>
    <h5>Showing {{$ctrl.courses.length}} courses</h5>

    <total-like-counter
      courses="$ctrl.courses">
    </total-like-counter>

    <total-enroll-counter
      courses="$ctrl.courses">
    </total-enroll-counter>
  </div>
`;

class CourseGalleryController {
  constructor() {
    'ngInject';
  }

  $onInit() {
    console.log('CourseGalleryController::$onInit');
  }
};

export default {
  bindings: {
    //inputs
    courses: '<',
    filter: '<'

    //outputs
  },
  template,
  controller: CourseGalleryController
};
