describe('Interest component controller test', function() {
    var $scope, $componentController, component, $q, interestDeferred, maxLoanDeferred, sumComb;

    beforeEach(module('interest'));
    //beforeEach(module('components'));

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
                        // interestDeferred.reject('sghdjsa');
                        return interestDeferred.promise;
                    }
                },
                UpdateInput:{
                    getSum: function () {
                        sumComb = 30000;
                        return {sum: sumComb}
                    }
                },
                MaxToLoan:{
                    getMaxToLoan:function () {
                        maxLoanDeferred = $q.defer();
                        return maxLoanDeferred.promise;
                    }
                }
            });

        //$scope.$digest();
    }));

    it('if we dont have combine income the result is 0 of course', function() {
        component.combineIncome = 0;
        component.calculateCost();
        maxLoanDeferred.resolve(3550); //resolve after the promise is expecting then
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

//expect(scope.ctrl.randomNumber).not.toBeDefined();
//expect(a).toBeNull();
//expect(foo).toEqual(bar);
