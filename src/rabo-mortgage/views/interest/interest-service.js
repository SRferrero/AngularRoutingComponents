(function () {
    'use strict';
    angular.module('interest')
        .factory('InterestService',['$http', function ($http) {
            return{
                requestInterest: function () {
                    return $http.get('http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate').then(function(response) {
                        return response.data.currentRate;
                    });
                }
            }

        }])
})()
