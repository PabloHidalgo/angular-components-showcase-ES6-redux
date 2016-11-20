let template = `
  Empty APP
`;

let controller = class AppController {
  constructor() {
    'ngInject';
  }
};

export let appComponent = {
  bindings: {},
  template,
  controller
};
