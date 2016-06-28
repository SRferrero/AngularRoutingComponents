describe('Interest component controller test', function() {
    var $scope, $componentController, component, $q;

    beforeEach(module('interest'));
    beforeEach(module('components'));

    beforeEach(inject(function($rootScope, _$componentController_, _$q_){
        $scope = $rootScope.$new();
        $componentController = _$componentController_;
        $q = _$q_;
    }));

    beforeEach(inject(function () {
        component = $componentController('interestComponent',
            {
                InterestService: { // mocking the service in the controller of the component
                    requestInterest: function() {//that is the return function in the service so we have to mock it also
                        var deferred = $q.defer();
                        deferred.resolve(2.1);
                        return deferred.promise;
                    }
                },
                UpdateInput:{
                    getSum: function () {
                        return {sum: 30000}
                    }
                },
                MaxToLoan:{
                    getMaxToLoan:function () {
                        var deferredLoan = $q.defer();
                        deferredLoan.resolve(505050);
                        return deferredLoan.promise;
                    }
                }
            });

        $scope.$digest();
    }));

    it('expect the values to be empty at the begining but not the call in the service', function() {
        //expect(scope.ctrl.randomNumber).not.toBeDefined();
        //expect(a).toBeNull();
        //expect(foo).toEqual(bar);
        component.combineIncome = 0;
        component.calculateCost();
        $scope.$digest();
        expect(component.month).toEqual(0);
    });

    it('giving some values', function() {
        //component.combineIncome = 30;
        component.calculateCost();
        $scope.$digest();
        expect(component.month).toEqual(12626250);
    });


});