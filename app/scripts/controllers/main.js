'use strict';

/**
 * @ngdoc function
 * @name weatherTownApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherTownApp
 */
angular.module('weatherTownApp')


.controller('MainCtrl', function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
  });
