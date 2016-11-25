import { rootReducer } from './redux/modules/reducer';

import thunk from 'redux-thunk';

// Apply some global configuration...

// If the user enters a URL that doesn't match any known URL (state), send them to `/`
export const otherwiseConfigBlock = ['$urlRouterProvider', $urlRouterProvider => { $urlRouterProvider.otherwise("/courses"); }];

// Redux store configuration provider...
export const reduxStoreConfigBlock = ['$ngReduxProvider', $ngReduxProvider => { $ngReduxProvider.createStoreWith(rootReducer, [ thunk ]); }];
