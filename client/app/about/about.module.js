import { loadNg1Module, ngmodule } from '../bootstrap/ngmodule';

import about from './about.component';

import aboutState from './about.states';

const aboutModule = {
  components: { about },
  states: [ aboutState ]
};

loadNg1Module(ngmodule, aboutModule);
