const template = `
  <md-sidenav class="md-sidenav-left md-whiteframe-z2" role="sidenav" md-component-id="left" md-is-locked-open="$mdMedia('gt-md')">
    <md-toolbar class="md-medium-tall md-hue-2" layout-align="end end">
      <div class="md-toolbar-tools" layout layout-padding>
        <div layout="column" layout-padding>
          <span class="md-body-2">AngularJS 1.5 Components Showcase + ES6 + Redux Architecture</span>
          <span flex></span>
        </div>
        <span flex></span>
      </div>
    </md-toolbar>
    <md-content role="navigation">
      <md-list ng-repeat="section in $ctrl.sections">
        <!-- toggle -->
        <md-list-item ng-click="section.expand = !section.expand" ng-if="::section.type === 'toggle'">
          <p class="md-primary">{{section.name}}</p>
          <span flex></span>
          <md-icon class="md-primary md-icon-button">{{section.expand ? 'arrow_drop_up' : 'arrow_drop_down'}}</md-icon>
        </md-list-item>

        <md-divider ng-if="::section.type === 'toggle'"></md-divider>

        <!-- toggle link -->
        <md-list-item ng-show="section.expand" ng-repeat="action in section.actions"
          ui-sref="{{::action.state}}" ng-if="::section.type === 'toggle'" class="toggle-action">
          <md-icon>{{::action.icon}}</md-icon>
          <p class="md-body-2">{{::action.name}}</p>
          <span flex></span>
          <md-icon>chevron_right</md-icon>
        </md-list-item>
        <!-- toggle link -->
        <!-- toggle -->

        <!-- link -->
        <md-list-item ng-if="::section.type === 'link'" ui-sref="{{::section.state}}">
          <md-icon>{{::section.icon}}</md-icon>
          <p class="md-body-2">{{::section.name}}</p>
          <span flex></span>
          <md-icon>chevron_right</md-icon>
        </md-list-item>
        <!-- link -->

        <md-divider ng-if="::section.type === 'link'"></md-divider>
      </md-list>
    </md-content>
  </md-sidenav>
`;

class AppSideNavController {
  constructor($rootScope, $mdSidenav) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$mdSidenav = $mdSidenav;
  }

  $onInit() {
    this.$rootScope.$on('$stateChangeSuccess', this.stateChangeSuccessHandler.bind(this));
  }

  stateChangeSuccessHandler(event, toState) {
    this.closeSideNav();
  }

  closeSideNav() {
    this.$mdSidenav('left').close();
  }
}

export default {
  bindings: {
    //inputs
    sections: '<'

    //outputs
  },
  template,
  controller: AppSideNavController
};
