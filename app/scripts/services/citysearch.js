'use strict';

/**
 * @ngdoc service
 * @name weatherTownApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherTownApp.
 */
angular.module('weatherTownApp')
.factory('citysearch', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=f871cb1a287c72d24f93963850b0e09e', {}, {
    find: {
      method: 'GET',
      params: {
        query: 'seattle'
      },
      isArray: false
    }
  });
});
