'use strict';

/**
 * @ngdoc function
 * @name weatherTownApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the weatherTownApp
 */
angular.module('weatherTownApp')
.controller('CurrentCtrl', function ($scope, $routeParams, current) {
  $scope.cityID = $routeParams.cityID;

  $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
  });



    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
