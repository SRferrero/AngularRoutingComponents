(function () {
    'use strict';

    angular.module('components')
        .factory('MaxToLoan',['$http', 'maxMortgageUrl', function ($http, maxMortgageUrl) {
            return{
                getMaxToLoan:function (val1, val2) {
                    return $http({
                        url: maxMortgageUrl,
                        method: "GET",
                        params: {income1: val1, income2: val2}
                    }).then(function (response) {
                        return response.data.maxToLoan;
                    });
                }
            }
        }]);
    
})()
