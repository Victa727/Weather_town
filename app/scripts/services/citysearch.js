'use strict';

/**
 * @ngdoc service
 * @name weatherTownApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherTownApp.
 */
angular.module('weatherTownApp')
  .factory('citysearch', function () {
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
