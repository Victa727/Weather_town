'use strict';

/**
 * @ngdoc service
 * @name weatherTownApp.forecast
 * @description
 * # forecast
 * Factory in the weatherTownApp.
 */
angular.module('weatherTownApp')
  .factory('forecast', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
