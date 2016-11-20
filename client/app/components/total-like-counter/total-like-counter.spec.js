import { ngmodule } from '../../bootstrap/ngmodule';
import '../../bootstrap/bootstrap';

describe('Component: total-like-counter', () => {
  let element, scope;
  let $rootScope, $compile;
  let headerElement, buttonElement;

  const initialData = [
    { liked: true },
    { liked: false },
    { liked: true },
    { liked: false },
    { liked: true }
  ];

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_$rootScope_,_$compile_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;

      scope = $rootScope.$new();

      element = angular.element('<total-like-counter courses="courses" display="display"></total-like-counter>');

      $compile(element)(scope);
      $rootScope.$digest();

      headerElement = angular.element(element[0].querySelector('h5'));
      buttonElement = angular.element(element[0].querySelector('.md-icon-button'));
  }));

  it('should render correct likes text value when there is no courses data', () => {
    scope.courses = null;
    scope.$apply();

    expect(headerElement.text()).to.be.equal('You like 0 courses.')
  });

  it('should render correct likes text value when courses data is present', () => {
    scope.courses = initialData;
    scope.$apply();

    expect(headerElement.text()).to.be.equal('You like 3 courses.')
  });

  describe('Display property is configured to \'text\' or not configured', () => {
    it('should render only a text header (not configured)', () => {
      expect(headerElement.length).to.be.equal(1);
      expect(buttonElement.length).to.be.equal(0);
    });

    it('should render only a text header (configured to \'text\')', () => {
      element = angular.element('<total-like-counter courses="courses" display="display"></total-like-counter>');
      scope.display = 'text';

      $compile(element)(scope);
      $rootScope.$digest();

      headerElement = angular.element(element[0].querySelector('h5'));
      buttonElement = angular.element(element[0].querySelector('.md-icon-button'));

      expect(headerElement.length).to.be.equal(1);
      expect(buttonElement.length).to.be.equal(0);
    });
  });

  describe('Display property is configured to \'icon\'', () => {
    let textNumberElement;

    beforeEach(() => {
      element = angular.element('<total-like-counter courses="courses" display="display"></total-like-counter>');
      scope.display = 'icon';

      $compile(element)(scope);
      $rootScope.$digest();

      headerElement = angular.element(element[0].querySelector('h5'));
      buttonElement = angular.element(element[0].querySelector('.md-icon-button'));
      textNumberElement = angular.element(element[0].querySelector('small'));
    });

    it('should render only an icon', () => {
      expect(headerElement.length).to.be.equal(0);
      expect(buttonElement.length).to.be.equal(1);
    });

    it('should render correct likes text number when there is no data', () => {
      expect(textNumberElement.text()).to.be.equal('0');
    });

    it('should render correct likes text number when data is present', () => {
      scope.courses = initialData;
      scope.$apply();

      expect(textNumberElement.text()).to.be.equal('3');
    });

    describe('Tooltip inside button', () => {
      //PENDING: it depends on angular material and component is not being transcluded.
    });
  });

  describe('Controller: TotalLikeCounterController', () => {
    let controller;

    beforeEach(() => {
      controller = element.controller('totalLikeCounter');
    });

    it('should calculate total likes when there is no data', () => {
      const expected = 0;
      const result = controller.calculateLikeCounter();

      expect(result).to.be.equal(expected);
    });

    it('should calculate total likes when data is present', () => {
      const expected = 3;
      const result = controller.calculateLikeCounter(initialData);

      expect(result).to.be.equal(expected);
    });
  });
});
