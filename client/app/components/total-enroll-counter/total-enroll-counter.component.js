const template = `
  <h5 ng-if="!$ctrl.display || $ctrl.display === 'text'">You are enrolled in {{$ctrl.calculateEnrollCounter($ctrl.courses)}} courses.</h5>

  <md-button
    ng-if="$ctrl.display == 'icon'"
    class="md-icon-button"
    aria-label="Favorite"
    ui-sref='courses-my-enrollments'>

    <small>{{$ctrl.calculateEnrollCounter($ctrl.courses)}}</small>
    <i class="material-icons md-24">turned_in</i>

    <md-tooltip>
      You are enrolled in {{$ctrl.calculateEnrollCounter($ctrl.courses)}} courses.
    </md-tooltip>
  </md-button>
`;

export class TotalEnrollCounterController {
  constructor() {

  }

  calculateEnrollCounter(courses) {
    return ( courses || [] ).filter(function(course) {
      return course.enrolled;
    }).length;
  }
}

export default {
  template,
  bindings: {
    //inputs
    courses: '<',
    display: '<'

    //outputs
  },
  controller: TotalEnrollCounterController
}
