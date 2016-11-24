const template = `
  <h1 style='text-align: center;'>ABOUT</h1>
`;

class AboutController {
  constructor() {
    'ngInject'
  }

  $onInit() {
    console.log('AboutController::$onInit');
  }
}

export default {
  bindings: {
    //inputs

    //outputs
  },
  template,
  controller: AboutController
};
