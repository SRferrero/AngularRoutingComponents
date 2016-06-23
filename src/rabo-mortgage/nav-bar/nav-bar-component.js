(function () {
    'use strict';
    
    angular.module('navBarModule')
        .component('navBar',{
            controller: ['ViewService', '$rootRouter', '$timeout', NavBarController],
            templateUrl: 'src/rabo-mortgage/nav-bar/nav-bar.html'
    });

    function NavBarController(ViewService, $rootRouter, $timeout) {

        var vm = this;
        vm.$onInit = function() {

            vm.navigation = ViewService.getAllViews();

            $timeout(handleRouterInitialized);//schedule the $rootRouter to later so will be loaded
            
            function handleRouterInitialized() {
                angular.forEach(vm.navigation, function (tab) {
                    if(tab.realRout == $rootRouter.lastNavigationAttempt){
                        tab.selected = true;
                    }
                });
            }


            //vm.navigation[0].selected = true; //to update the selected item, also set as selected. Is an object pointer so will update the service
        }

        vm.updateCurrentNav = function (nav) {
        ViewService.getSelected().selected = false;
        ViewService.getCurrent().url = nav.url; //updating the same object that the main controller is using
        nav.selected = true;
    }

    }
})()