'use strict';

angular.module('campaignsListApp').config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/campaigns', {
        template: '<campaign-list></campaign-list>',
      })
      .otherwise('/campaigns');
  },
]);
