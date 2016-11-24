const template = `
  <button-enroll-counter
    enrolls="$ctrl.totalEnrolls"
    enrolled="$ctrl.enrolled"
    on-enroll-clicked="$ctrl.toggleEnrollCourse($ctrl.courseId);">
  </button-enroll-counter>

  <button-like-counter
    likes="$ctrl.totalLikes"
    liked="$ctrl.liked"
    on-like-clicked="$ctrl.toggleLikeCourse($ctrl.courseId);">
  </button-like-counter>
`;

class CourseActionsController {
  constructor() {
    'ngInject';
  }

  $onInit() {
    console.log('CourseActionsController::$onInit');
  }

  toggleEnrollCourse(courseId) {
    console.log('CourseActionsController::toggleEnrollCourse');
  }

  toggleLikeCourse(courseId) {
    console.log('CourseActionsController::toggleLikeCourse');
  }
};

export default {
  bindings: {
    //inputs
    courseId: '<',

    totalEnrolls: '<',
    enrolled: '<',

    totalLikes: '<',
    liked: '<',

    //outputs
    onEnroll: '&',
    onLike: '&'
  },
  template,
  controller: CourseActionsController
};
