const template = `
  <h5 ng-if="!$ctrl.display || $ctrl.display == 'text'">You like {{$ctrl.calculateLikeCounter($ctrl.courses)}} courses.</h5>

  <md-button
    ng-if="$ctrl.display == 'icon'"
    class="md-icon-button"
    aria-label="Favorite"
    ui-sref='courses-my-favourites'>

    <small>{{$ctrl.calculateLikeCounter($ctrl.courses)}}</small>
    <i class="material-icons md-24">thumb_up</i>

    <md-tooltip>
      You like {{$ctrl.calculateLikeCounter($ctrl.courses)}} courses.
    </md-tooltip>
  </md-button>
`;

export class TotalLikeCounterController {
  constructor() {

  }

  calculateLikeCounter(courses) {
    return ( courses || [] ).filter(function(course) {
      return course.liked;
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
  controller: TotalLikeCounterController
}
