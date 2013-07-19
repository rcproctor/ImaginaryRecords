'use strict';

describe('Controller: MailingCtrl', function () {

  // load the controller's module
  beforeEach(module('ImaginaryRecordsApp'));

  var MailingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MailingCtrl = $controller('MailingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
