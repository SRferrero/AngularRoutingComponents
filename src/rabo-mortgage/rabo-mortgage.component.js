(function () {
    'use strict';
    angular.module('rabo-mortgage')
        .component('raboMortgageComponent',{
            templateUrl: 'src/rabo-mortgage/rabo-mortgage.html',
            contoller: [RaboMortgageController],
            $routeConfig:[
                {path: '/calculator', name: 'Calculator', component: 'calculatorComponent', useAsDefault: true},
                {path: '/interest', name: 'Interest', component: 'interestComponent'},
                {path: '/conditions', name: 'Conditions', component: 'conditionsComponent'}
            ]
    });
    

    function RaboMortgageController() {
        var vm = this;
       console.log('fdghcxjzk');
    }
    
})();


