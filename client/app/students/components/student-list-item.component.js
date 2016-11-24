const template = `
  <fieldset>
    <img data-ng-src="{{::$ctrl.student.image}}"></img>
    <p>{{::$ctrl.student.name}}</p>
    <hr/>
    <p>Enrolled in 15 courses</p>
    <p>Like 55 courses</p>
  </fieldset>
`;

class StudentListItemController {
  constructor() {
    'ngInject'
  }

  $onInit() {
    console.log('StudentListItemController::$onInit');
  }
}

export default {
  bindings: {
    //inputs
    student: '<'

    //outputs
  },
  template,
  controller: StudentListItemController
};
