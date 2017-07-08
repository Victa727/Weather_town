'use strict';

/**
 * @ngdoc service
 * @name weatherTownApp.forecast
 * @description
 * # forecast
 * Factory in the weatherTownApp.
 */
angular.module('weatherTownApp')
.factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=7&units=imperial&APPID=f871cb1a287c72d24f93963850b0e09e', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
