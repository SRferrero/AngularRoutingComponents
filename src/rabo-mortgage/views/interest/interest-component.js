(function () {
    'use strict';

    angular.module('interest')
        .component('InterestComponent', {
            templateUrl: 'src/views/interest/interest.html',
            controller: [InterestController]
        });

    function InterestController() {
        var vm = this;
    }
})();

