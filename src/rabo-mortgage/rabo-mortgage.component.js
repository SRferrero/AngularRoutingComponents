(function () {
    'use strict';
    //Modules to be included
    angular.module('rabo-mortgage').
        component('raboMortgageComponent',{
            template: 'src/rabo-mortgage/rabo-mortgage.html',
            contoller: [RaboMortgageController],
            $routeConfig:[
                {path: '/calculator', name: 'CalculatorView', component: 'calculator', useAsDefault: true},
                {path: '/interest', name: 'InterestView', component: 'interest'},
                {path: '/conditions', name: 'ConditionsView', component: 'conditions'}
            ]
    });
    
    function RaboMortgageController() {
        var vm = this;
    }
    
})();


