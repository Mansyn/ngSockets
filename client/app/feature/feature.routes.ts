'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/feature', {
      template: '<feature></feature>'
    });
}
