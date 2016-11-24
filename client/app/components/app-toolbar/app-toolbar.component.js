const template = `
  <md-toolbar role="toolbar">
    <div class="md-toolbar-tools">
      <md-button class="md-icon-button" ng-click="$ctrl.toggleSidenav('left')" hide-gt-md aria-label="Menu">
        <md-icon>menu</md-icon>
      </md-button>
      <h4 class="md-title">{{$ctrl.title}}</h4>
      <span flex></span>
      <total-enroll-counter
        display="'icon'"
        courses="$ctrl.courses">
      </total-enroll-counter>
      <total-like-counter
        display="'icon'"
        courses="$ctrl.courses">
      </total-like-counter>
      <md-button class="md-icon-button" ng-repeat="button in $ctrl.items.buttons" aria-label={{button.name}} ng-click="toast(button.link)">
        <md-icon>{{button.icon}}</md-icon>
      </md-button>
      <md-menu md-position-mode="target-right target" ng-repeat="menu in $ctrl.items.menus">
        <md-button class="md-icon-button" aria-label="{{menu.name}}" ng-click="$mdOpenMenu($event)">
          <md-icon>{{menu.icon}}</md-icon>
        </md-button>
        <md-menu-content width={{menu.width}}>
          <md-subheader>{{menu.name}}</md-subheader>
          <md-menu-item ng-repeat="action in menu.actions">
            <md-button layout-fill md-ink-ripple ng-click="toast(action.message)">
              <md-icon md-class="{{action.error ? 'md-warn' : 'md-primary'}}" md-menu-align-target>{{action.completed ? 'done' : 'hourglass_empty'}}</md-icon>
              {{action.name}}
            </md-button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
  </md-toolbar>
`;

class AppToolbarController {
  constructor($mdSidenav) {
    'ngInject';

    this.$mdSidenav = $mdSidenav;
  }

  $onInit() {

  }

  toggleSidenav(menu) {
    this.$mdSidenav(menu).toggle();
  }
}

export default {
  bindings: {
    //inputs
    items: '<',
    title: '<',
    courses: '<'

    //outputs
  },
  template,
  controller: AppToolbarController
};
