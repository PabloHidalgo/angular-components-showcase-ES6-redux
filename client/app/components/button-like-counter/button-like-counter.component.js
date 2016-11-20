const template = `
  <md-button
    class="md-icon-button"
    aria-label="Favorite"
    ng-class="{'md-accent': $ctrl.liked}"
    ng-click="$ctrl.onLikeClicked();">

    <small>{{$ctrl.likes || 0}}</small>
    <i class="material-icons md-24">thumb_up</i>

    <md-tooltip>
      {{$ctrl.likes}} likes
    </md-tooltip>
  </md-button>
`;

export class ButtonLikeCounterController {
  constructor() {

  }
}

export default {
  template,
  bindings: {
    //inputs
    likes: '<',
    liked: '<',

    //outputs
    onLikeClicked: '&'
  },
  controller: ButtonLikeCounterController
}
