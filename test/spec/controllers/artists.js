'use strict';

describe('Controller: ArtistsCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('ngGrid');
    module('ImaginaryRecordsApp');
  });

  var ArtistsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtistsCtrl = $controller('ArtistsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of artists to the scope', function () {
    expect(scope.artists).not.toBe(null);
    expect(scope.artists).toBeDefined();
  });

  it('should have a list of five artists', function(){
    expect(scope.artists.length).toBe(5);
  });

  it('should have Modest Mouse as the first artist', function(){
      expect(scope.artists[0].name).toMatch(/Modest Mouse/);
  });
});
