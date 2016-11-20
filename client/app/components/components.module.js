import { ngmodule } from '../bootstrap/ngmodule';

import buttonEnrollCounterComponent from './button-enroll-counter/button-enroll-counter.component';
import buttonLikeCounterComponent from './button-like-counter/button-like-counter.component';

import searchBoxComponent from './search-box/search-box.component';

import totalEnrollCounterComponent from './total-enroll-counter/total-enroll-counter.component';
import totalLikeCounterComponent from './total-like-counter/total-like-counter.component';

ngmodule
.component('buttonEnrollCounter', buttonEnrollCounterComponent)
.component('buttonLikeCounter', buttonLikeCounterComponent)
.component('searchBox', searchBoxComponent)
.component('totalEnrollCounter', totalEnrollCounterComponent)
.component('totalLikeCounter', totalLikeCounterComponent);
