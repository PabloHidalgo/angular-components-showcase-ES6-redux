const template = `
  <md-card>
    <img ng-src="{{::$ctrl.image}}" class="md-card-image" alt="{{::$ctrl.title}}">
    <md-card-title>
      <md-card-title-text>
        <span class="md-headline">{{::$ctrl.title}}</span>
      </md-card-title-text>
    </md-card-title>
    <md-card-content>
      <p>
        {{::$ctrl.content}}
      </p>
    </md-card-content>
    <md-card-actions layout="row" layout-align="end center">
      <course-actions
        course-id="$ctrl.id"
        total-enrolls="$ctrl.enrolls" enrolled="$ctrl.enrolled"
        total-likes="$ctrl.likes" liked="$ctrl.liked"

        on-enroll="$ctrl.onEnroll($event.id, $event.title, $event.enrolled);"
        on-like="$ctrl.onLike($event.id, $event.title, $event.liked);">
      </course-actions>
    </md-card-actions>
  </md-card>
`;

class CourseCardController {
  constructor($mdToast) {
    'ngInject';

    this.$mdToast = $mdToast;
  }

  $onInit() {
    console.log('CourseCardController::$onInit');
  }

  onEnroll(courseId, title, enrolled) {
    console.log('CourseCardController::onEnroll');
  }

  onLike(courseId, title, liked) {
    console.log('CourseCardController::onLike');
  }

  showToast(message) {
    const toast = this.$mdToast.simple().content(message).position('bottom right');
    this.$mdToast.show(toast);
  }
};

export default {
  bindings: {
    //inputs
    id: '<',

    title: '<',
    content: '<',
    image: '<',

    enrolls: '<',
    enrolled: '<',

    likes: '<',
    liked: '<',

    //outputs
  },
  template,
  controller: CourseCardController
};
