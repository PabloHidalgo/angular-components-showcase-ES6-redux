const template = `
  <search-box
    title='Search a student...'
    on-change='$ctrl.search($event.text);'>
  </search-box>
  <h2>Total students: {{$ctrl.students.length}}</h2>
  <students-list students='$ctrl.students' filter='$ctrl.filter'></students-list>
`;

class StudentsController {
  constructor() {
    'ngInject'
  }

  $onInit() {
    this.filter = '';

    console.log('StudentsController::$onInit');
  }

  search(value) {
    this.filter = value;

    console.log('StudentsController::search()');
    console.log(value);
  }
}

export default {
  bindings: {
    //inputs
    title: '<',
    students: '<'

    //outputs
  },
  template,
  controller: StudentsController
};
