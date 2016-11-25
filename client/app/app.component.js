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

    const actions = Object.assign({}, CoursesActions);
    let disconnect = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', () => disconnect());
  }

  $onInit() {
    //todo: export to json definition file
    this.data = this.getData();

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

  getData() {
    return {
      sidenav: {
        sections: [
          {
            name: 'Courses',
            type: 'toggle',
            expand: true,
            actions: [{
              name: 'All Courses',
              icon: 'list',
              state: 'courses'
            }, {
              name: 'Top Favourites',
              icon: 'thumbs_up_down',
              state: 'courses-top-favourites'
            }, {
              name: 'Top Enrollments',
              icon: 'swap_vert',
              state: 'courses-top-enrollments'
            }]
          },
          {
            name: 'My Career',
            type: 'toggle',
            expand: false,
            actions: [{
              name: 'My Favourites',
              icon: 'thumb_up',
              state: 'courses-my-favourites'
            }, {
              name: 'My Enrollments',
              icon: 'turned_in',
              state: 'courses-my-enrollments'
            }]
          },
          // {
          //   name: 'Timeline',
          //   icon: '',
          //   type: 'link',
          //   state: 'timeline'
          // },
          {
            name: 'Students',
            icon: 'face',
            type: 'link',
            state: 'students'
          },
          {
           name: 'Teachers',
           icon: 'assignment_ind',
           type: 'link',
           state: 'teachers'
         },
         {
          name: 'About',
          icon: 'info',
          type: 'link',
          state: 'about'
        }
      ]}
    };
  }
};

export const app = {
  bindings: {},
  template,
  controller: AppController
};
