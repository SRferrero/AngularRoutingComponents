angular.module('nav-bar').controller('NavBarController', ['ViewService', function (ViewService) {
    var vm = this;
   
    function initialize() {
        vm.navigation = ViewService.getAllViews();
        vm.navigation[0].selected = true; //to update the selected item, also set as selected. Is an object pointer so will update the service
        
    }
        
    vm.updateCurrentNav = function (nav) {
        ViewService.getSelected().selected = false;
        ViewService.getCurrent().url = nav.url; //updating the same object that the main controller is using
        nav.selected = true;
    }
    
    initialize();
    
}])