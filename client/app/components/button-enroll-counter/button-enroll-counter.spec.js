import { ngmodule } from '../../bootstrap/ngmodule';
import '../../bootstrap/bootstrap';

import { ButtonEnrollCounterController } from './button-enroll-counter.component';

describe('Component: button-enroll-counter', () => {
  let element, scope;
  let $rootScope, $compile;
  let textNumberElement, buttonElement;

  const initialData = [];

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_$rootScope_,_$compile_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;

      scope = $rootScope.$new();

      element = angular.element('<button-enroll-counter on-enroll-clicked="onClick()" enrolls="enrolls" enrolled="enrolled"></button-enroll-counter>');

      $compile(element)(scope);
      $rootScope.$digest();

      textNumberElement = angular.element(element[0].querySelector('small'));
  }));

  it('should render correct enrolls text value when there is no enrolls data', () => {
    expect(textNumberElement.html()).to.be.equal('0');
  });

  it('should render correct enrolls text value when enrolls data is present', () => {
    scope.enrolls = 5;
    scope.$apply();

    expect(textNumberElement.html()).to.be.equal('5');
  });

  describe('Button', () => {
    beforeEach(() => {
      buttonElement = angular.element(element[0].querySelector('.md-icon-button'));
    });

    describe('Click', () => {
      it('should call the scoped onClick method when button is clicked', () => {
        scope.onClick = sinon.spy();
        scope.$apply();

        buttonElement.triggerHandler('click');
        expect(scope.onClick.calledOnce).to.be.true;
      });
    });

    describe('Selection style', () => {
      it('should render normal button style when not enrolled', () => {
        expect(buttonElement.hasClass('md-accent')).to.be.false;
      });

      it('should render selected button style when enrolled', () => {
        scope.enrolled = true;
        scope.$apply();

        expect(buttonElement.hasClass('md-accent')).to.be.true;
      });
    });
  });
});
