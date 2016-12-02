import appData from './app.data';

const template = `
  <div layout="row" layout-fill ng-cloak>
    <app-side-nav sections="$ctrl.data.sidenav.sections"></app-side-nav>

    <section layout="column" role="main" flex>
      <app-toolbar items="$ctrl.data.toolbar" courses="$ctrl.courses" title="$ctrl.title"></app-toolbar>

      <!-- content -->
      <section id="content" role="content" layout="column" layout-padding md-scroll-y>
        <md-content class="md-whiteframe-z2" ng-cloak ui-view>
        </md-content>
      </section>
    </section>
    <!-- content -->
  </div>
`;

class AppController {
  constructor($ngRedux, $rootScope, $scope, CoursesActions) {
    'ngInject';

    this.$rootScope = $rootScope;

    let disconnect = $ngRedux.connect(this.mapStateToThis, CoursesActions)(this);
    $scope.$on('$destroy', () => disconnect());
  }

  $onInit() {
    this.data = appData;

    this.loadCourses();

    this.$rootScope.$on('$stateChangeSuccess', this.stateChangeSuccessHandler.bind(this));
  }

  stateChangeSuccessHandler(event, toState) {
    this.updateTitle(event, toState);
  }

  updateTitle(event, toState) {
    this.$rootScope.title = this.title = toState.resolve.title();
  }

  mapStateToThis(state) {
    return {
      courses: state.courses
    };
  }
};

export const app = {
  bindings: {},
  template,
  controller: AppController
};
