const template = `
  <h1 style='text-align: center;'>{{$ctrl.title}}</h1>
  <h2>Total teachers: {{$ctrl.teachers.length}}</h2>
`;

class TeachersController {
  constructor() {
    'ngInject'
  }

  $onInit() {
    this.teachers = [];

    console.log('TeachersController::$onInit');
  }
}

export default {
  bindings: {
    //inputs
    title: '<',
    teachers: '<'

    //outputs
  },
  template,
  controller: TeachersController
};
