import { loadNg1Module, ngmodule } from '../bootstrap/ngmodule';

import appSideNav from './app-side-nav/app-side-nav.component';
import appToolbar from './app-toolbar/app-toolbar.component';

import buttonEnrollCounter from './button-enroll-counter/button-enroll-counter.component';
import buttonLikeCounter from './button-like-counter/button-like-counter.component';

import searchBox from './search-box/search-box.component';
import totalEnrollCounter from './total-enroll-counter/total-enroll-counter.component';
import totalLikeCounter from './total-like-counter/total-like-counter.component';

const componentsModule = {
  components: { appSideNav, appToolbar, buttonEnrollCounter, buttonLikeCounter, searchBox,
    totalEnrollCounter, totalLikeCounter }
};

loadNg1Module(ngmodule, componentsModule);
