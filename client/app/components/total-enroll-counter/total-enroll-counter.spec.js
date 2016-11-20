import { ngmodule } from '../../bootstrap/ngmodule';
import '../../bootstrap/bootstrap';

describe('Component: total-enroll-counter', () => {
  let element, scope;
  let $rootScope, $compile;
  let headerElement, buttonElement;

  const initialData = [
    { enrolled: true },
    { enrolled: false },
    { enrolled: true },
    { enrolled: false },
    { enrolled: true }
  ];

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_$rootScope_,_$compile_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;

      scope = $rootScope.$new();

      element = angular.element('<total-enroll-counter courses="courses" display="display"></total-enroll-counter>');

      $compile(element)(scope);
      $rootScope.$digest();

      headerElement = angular.element(element[0].querySelector('h5'));
      buttonElement = angular.element(element[0].querySelector('.md-icon-button'));
  }));

  it('should render correct enrolls text value when there is no courses data', () => {
    scope.courses = null;
    scope.$apply();

    expect(headerElement.text()).to.be.equal('You are enrolled in 0 courses.')
  });

  it('should render correct enrolls text value when courses data is present', () => {
    scope.courses = initialData;
    scope.$apply();

    expect(headerElement.text()).to.be.equal('You are enrolled in 3 courses.')
  });

  describe('Display property is configured to \'text\' or not configured', () => {
    it('should render only a text header (not configured)', () => {
      expect(headerElement.length).to.be.equal(1);
      expect(buttonElement.length).to.be.equal(0);
    });

    it('should render only a text header (configured to \'text\')', () => {
      element = angular.element('<total-enroll-counter courses="courses" display="display"></total-enrolls-counter>');
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
      element = angular.element('<total-enroll-counter courses="courses" display="display"></total-enrolls-counter>');
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

    it('should render correct enrolls text number when there is no data', () => {
      expect(textNumberElement.text()).to.be.equal('0');
    });

    it('should render correct enrolls text number when data is present', () => {
      scope.courses = initialData;
      scope.$apply();

      expect(textNumberElement.text()).to.be.equal('3');
    });

    describe('Tooltip inside button', () => {
      //PENDING: it depends on angular material and component is not being transcluded.
    });
  });

  describe('Controller: TotalEnrollCounter', () => {
    let controller;

    beforeEach(() => {
      controller = element.controller('totalEnrollCounter');
    });

    it('should calculate total enrolls when there is no data', () => {
      const expected = 0;
      const result = controller.calculateEnrollCounter();

      expect(result).to.be.equal(expected);
    });

    it('should calculate total enrolls when data is present', () => {
      const expected = 3;
      const result = controller.calculateEnrollCounter(initialData);

      expect(result).to.be.equal(expected);
    });
  });
});
