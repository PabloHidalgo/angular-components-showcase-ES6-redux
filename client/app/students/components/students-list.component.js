const template = `
  <ul>
    <li data-ng-repeat="student in $ctrl.students | filter: $ctrl.filter">
      <student-list-item
        student="student">
      </student-list-item>
    </li>
  </ul>
`;

class StudentsListController {
  constructor() {
    'ngInject'
  }

  $onInit() {
    console.log('StudentsListController::$onInit');
  };
}

export default {
  bindings: {
    //inputs
    students: '<',
    filter: '<'

    //outputs
  },
  template,
  controller: StudentsListController
};
