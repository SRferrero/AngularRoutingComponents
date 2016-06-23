(function () {
    'use strict';

    angular.module('calculator')
        .component('calculatorComponent', {
            templateUrl: 'src/rabo-mortgage/views/calculator/calculator.html',
            controller: ['MaxToLoan', 'ViewService', 'UpdateInput', CalculatorController]
        });

    function CalculatorController(MaxToLoan, ViewService, UpdateInput) {
        var vm = this;
        vm.haveResponse = false;
        UpdateInput.updateSum(vm.bruto, vm.brutoPartner);
        vm.requestMax = function () {

            vm.brutoPartner = vm.brutoPartner || 0;//in case you dont know your partner income.
            MaxToLoan.getMaxToLoan(vm.bruto, vm.brutoPartner).then(function (maxLoanValue) {
                vm.maxLoan = maxLoanValue;
                UpdateInput.updateSum(vm.maxLoan);
                vm.haveResponse = true;
            });

        };

        vm.showConditions = function () {
            var current =  ViewService.getSelected(),
                next = ViewService.getAllViews()[2];
            current.selected = false;
            next.selected = true;
            ViewService.getCurrent().url = next.url;//for the main controller to include the url

        }
    }
})();

