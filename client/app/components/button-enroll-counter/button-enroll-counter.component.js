const template = `
  <md-button
    class="md-icon-button"
    aria-label="Favorite"
    ng-class="{'md-accent': $ctrl.enrolled}"
    ng-click="$ctrl.onEnrollClicked();">

    <small>{{$ctrl.enrolls || 0}}</small>
    <i class="material-icons md-24">turned_in</i>

    <md-tooltip>
      {{$ctrl.enrolls}} students enrolled
    </md-tooltip>
  </md-button>
`;

export class ButtonEnrollCounterController {
  constructor() {

  }
}

export default {
  template,
  bindings: {
    //inputs
    enrolls: '<',
    enrolled: '<',

    //outputs
    onEnrollClicked: '&'
  },
  controller: ButtonEnrollCounterController
}
