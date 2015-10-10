'use strict';

describe('Controller: ClientsamplesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClientsamplesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientsamplesCtrl = $controller('ClientsamplesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientsamplesCtrl.awesomeThings.length).toBe(3);
  });
});
