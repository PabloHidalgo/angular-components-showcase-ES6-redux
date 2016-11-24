const template = `
  <div layout="row" layout-margin>
    <md-input-container flex>
      <label ng-if="$ctrl.title">{{$ctrl.title}}</label>
      <input ng-change="$ctrl.onSearch($ctrl.searchValue);"
          ng-model="$ctrl.searchValue"
          ng-model-options="{ debounce: 500 }" />
    </md-input-container>
  </div>
`;

export class SearchBoxController {
  constructor() {

  }

  onSearch(value) {
    console.log('SearchBoxController::onSearch()');
    console.log(value);

    this.onChange({ $event: { text: value } });
  }
}

export default {
  template,
  bindings: {
    //inputs
    title: '@',

    //outputs
    onChange: '&'
  },
  controller: SearchBoxController
}
