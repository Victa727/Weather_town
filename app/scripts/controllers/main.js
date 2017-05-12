'use strict';

/**
 * @ngdoc function
 * @name weatherTownApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherTownApp
 */
angular.module('weatherTownApp')
.controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };



    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
