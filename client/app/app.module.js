import { loadNg1Module, ngmodule } from './bootstrap/ngmodule';

import { app } from './app.component';
import appState from './app.states';
import * as config from './app.config';

import { CoursesActions } from './redux/modules/courses';

const appModule = {
  states: [ appState ],
  components: { app },
  services: { CoursesActions },
  configBlocks: [ config.otherwiseConfigBlock, config.reduxStoreConfigBlock ]
};

loadNg1Module(ngmodule, appModule);
