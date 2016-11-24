import { loadNg1Module, ngmodule } from './bootstrap/ngmodule';

import { app } from './app.component';
import appState from './app.states';
import { otherwiseConfigBlock } from './app.config';

const appModule = {
  components: { app },
  states: [ appState ],
  configBlocks: [otherwiseConfigBlock]
};

loadNg1Module(ngmodule, appModule);
