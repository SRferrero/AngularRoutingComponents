(function () {
    'use strict';

    angular.module('interest')
        .component('interestComponent', {
            templateUrl: 'src/rabo-mortgage/views/interest/interest.html',
            controller: ['InterestService','UpdateInput', InterestController]
        });

    function InterestController(InterestService, UpdateInput) {
        var vm = this;
        var rate;//for the calculations something private

        vm.combineIncome = UpdateInput.getSum().sum || '';

        InterestService.requestInterest().then(function (currentRate) {
            rate = currentRate;
            vm.interest = rate + '% this is the current ratio d00d';
        }, function (errorInteresr) {
            console.log('error' + errorInteresr);
        });

        vm.calculateCost = function () {
            vm.month =  rate * vm.combineIncome / 100 / 12;
        }
    }
})();

