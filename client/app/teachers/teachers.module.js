import { loadNg1Module, ngmodule } from '../bootstrap/ngmodule';

import teachers from './teachers.component';

import teachersState from './teachers.states';

const teachersModule = {
  components: { teachers },
  states: [ teachersState ]
};

loadNg1Module(ngmodule, teachersModule);
