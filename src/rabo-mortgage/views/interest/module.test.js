describe('Interest component controller test', function() {
    var $scope, $componentController, component, $q, interestDeferred, maxLoanDeferred;

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
                        // var interestDeferred = $q.defer();
                        interestDeferred = $q.defer();
                        interestDeferred.resolve(2.1);
                        return interestDeferred.promise;
                    }
                },
                UpdateInput:{
                    getSum: function () {
                        return {sum: 30000}
                    }
                },
                MaxToLoan:{
                    getMaxToLoan:function () {
                        // var  maxLoanDeferred = $q.defer();
                        maxLoanDeferred = $q.defer();
                        // maxLoanDeferred.resolve(505050);
                        return maxLoanDeferred.promise;
                    }
                }
            });

        //$scope.$digest();
    }));

    it('expect the values to be empty at the begining but not the call in the service', function() {
        //expect(scope.ctrl.randomNumber).not.toBeDefined();
        //expect(a).toBeNull();
        //expect(foo).toEqual(bar);

        component.combineIncome = 0;
        component.calculateCost();
        maxLoanDeferred.resolve(505050); //resolve after the promise is expecting then
        $scope.$digest();
        expect(component.month).toEqual(0);
    });

    it('giving some values', function() {

        //interestDeferred.resolve(2.1);//so far is ok to resolve in the creation, no need to change
        component.calculateCost();
        maxLoanDeferred.resolve(505050);
        $scope.$digest();
        expect(component.month).toEqual(12626250);
    });


});