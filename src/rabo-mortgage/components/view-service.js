angular.module('components',[]).factory('ViewService',[function () {
    var views = [
        {name: 'Calculator', url:'src/views/calculator/calculator.html', selected: false},
        {name: 'Interest', url:'src/views/interest/interest.html', selected: false},
        {name: 'Conditions', url:'src/views/conditions/conditions.html', selected: false} //'src/rent/interest.html','src/conditions/conditions.html'
    ];

    var currentView = {url: views[0].url};
    var selected;
    return {
        getAllViews: function() {
            return views;
        },

        getCurrent: function() {//used in the main controller to update the index
            return currentView;
        },
        getSelected: function () {
            views.forEach(function (view) {
                if(view.selected == true){
                    selected = view;
                }
            });
            return selected;
        }
    }
}]);

/*
 ,
 updateUrl: function () {
 return {url: views[0].url};
 }
 */