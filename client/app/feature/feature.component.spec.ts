'use strict';

describe('Component: FeatureComponent', function() {
  // load the controller's module
  beforeEach(module('ngSocketsApp.feature'));

  var FeatureComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FeatureComponent = $componentController('feature', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
