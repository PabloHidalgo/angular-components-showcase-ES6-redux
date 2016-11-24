// Apply some global configuration...

// If the user enters a URL that doesn't match any known URL (state), send them to `/`
export const otherwiseConfigBlock = ['$urlRouterProvider', $urlRouterProvider => { $urlRouterProvider.otherwise("/courses"); }];
