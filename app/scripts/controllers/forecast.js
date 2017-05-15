'use strict';

/**
 * @ngdoc function
 * @name weatherTownApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherTownApp
 */
angular.module('weatherTownApp')
.controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
      $scope.cityID = $routeParams.cityID;

      $scope.forecastData = forecast.query({
          cityID: $routeParams.cityID
      });
    });
