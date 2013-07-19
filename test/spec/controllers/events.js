'use strict';

describe('Controller: EventsCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('ngGrid');
    module('ImaginaryRecordsApp');
  });

  var EventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsCtrl = $controller('EventsCtrl', {
      $scope: scope
    });
  }));
  
  it('should create grid data and attach it to scope', function() {
    expect(scope.myData).not.toBe(null);
    expect(scope.myData).toBeDefined();
  });

  it('should add grid configuration to the scope', function () {
    expect(scope.myOptions).not.toBe(null);
    expect(scope.myOptions).toBeDefined();
  });

  it('should add two headers to the grid', function () {
    expect(scope.myOptions.columnDefs).not.toBe(null);
    expect(scope.myOptions.columnDefs).toBeDefined();
    expect(scope.myOptions.columnDefs.length).toEqual(2);

    expect(scope.myOptions.columnDefs[0].field).toMatch(/eventName/);
    expect(scope.myOptions.columnDefs[0].displayName).toMatch(/Event/);

    expect(scope.myOptions.columnDefs[1].field).toMatch(/description/);
    expect(scope.myOptions.columnDefs[1].displayName).toMatch(/Event Description/);
  });
});
