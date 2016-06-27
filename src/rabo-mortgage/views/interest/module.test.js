describe('Interest component controller test', function() {
    var scope, $componentController, component;

    beforeEach(module('interest'));
    beforeEach(module('components'));

    beforeEach(inject(function($rootScope, _$componentController_){
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    beforeEach(inject(function () {
        component = $componentController('interestComponent');
        //scope.$digest();
    }));

    it('expect the interest to be empty at the begining"', function() {
        //expect(scope.ctrl.randomNumber).not.toBeDefined();
        //expect(a).toBeNull();
        //expect(foo).toEqual(bar);
        
        console.log(component);
        component.calculateCost();
        expect(component.month).toEqual(NaN);
    });

    it('giving some values"', function() {
        component.combineIncome = 30;
        component.setRate(30);
        component.calculateCost();
        expect(component.month).toEqual(0.75);
    });


});