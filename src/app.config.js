(function () {
    'use strict';

    angular.module('app')
        .value('$routerRootComponent', 'raboMortgageComponent')
        .value('maxMortgageUrl', 'http://agile-wave-86684.herokuapp.com/max-to-loan');

})();
