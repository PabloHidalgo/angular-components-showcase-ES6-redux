import { ngmodule } from '../../bootstrap/ngmodule';
import '../../bootstrap/bootstrap';

import { SearchBoxController } from './search-box.component';

describe('Component: search-box', () => {
  let element, scope;
  let $rootScope, $compile, $timeout;
  let inputElement, titleElement;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_$rootScope_,_$compile_, _$timeout_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      $timeout = _$timeout_;

      scope = $rootScope.$new();

      element = angular.element('<search-box on-change="search($event.text)" title="title"></search-box>');

      $compile(element)(scope);
      $rootScope.$digest();

      inputElement = angular.element(element[0].querySelector('input'));
      titleElement = angular.element(element[0].querySelector('label'));
  }));

  it('should render an input element', () => {
    expect(inputElement.length).to.be.equal(1);
  });

  it('should not render a title by default', () => {
    expect(titleElement.length).to.be.equal(0);
  });

  it('should render a title if it\'s present', () => {
    const expected = 'Hello World!';

    scope.title = expected;

    element = angular.element('<search-box title="title"></search-box>');

    $compile(element)(scope);
    $rootScope.$digest();

    titleElement = angular.element(element[0].querySelector('label'));

    expect(titleElement.text()).to.be.equal(expected);
  });

  it('should call the scoped search method with given parameters when input value is changed', () => {
    const input = 'AngularJS is (L)';
    const expected = input;

    scope.search = sinon.spy();

    inputElement.val(input).triggerHandler('input');
    $timeout.flush();

    expect(scope.search.calledOnce).to.be.true;
    expect(scope.search.calledWith(expected)).to.be.true;
  });

  describe('Controller: SearchBoxController', () => {
    let controller;

    beforeEach(() => {
      controller = element.controller('searchBox');
    });

    it('should expose a method for when the input is changed', function() {
      expect(controller.onChange).to.exist;
      expect(angular.isFunction(controller.onChange)).to.be.true;
    });

    it('should call the scoped search method with given parameters when search is done', () => {
      const input = 'AngularJS is (L)';
      const expected = input;

      scope.search = sinon.spy();

      controller.onSearch(input);

      expect(scope.search.calledOnce).to.be.true;
      expect(scope.search.calledWith(expected)).to.be.true;
    });
  });
});
