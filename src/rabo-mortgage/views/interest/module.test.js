describe('Interest component controller test', function() {
    var scope, $componentController, component;

    beforeEach(module('interest'));
    beforeEach(module('components'));

    beforeEach(inject(function($rootScope, _$componentController_){
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    it('expect the interest to be empty at the begining"', function() {
        //expect(scope.ctrl.randomNumber).not.toBeDefined();
        //expect(a).toBeNull();
        //expect(foo).toEqual(bar);
        component = $componentController('interestComponent');
        console.log(component);
        component.calculateCost();
        expect(component.month).toEqual(NaN);
    });


});