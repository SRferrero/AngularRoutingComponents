describe('Max Mortgage Service', function() {
    var MaxMortgage, httpBackend, mortUrl;

    beforeEach(module('components')); // to get the value MaxMortgageUrl

    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
    }));

    beforeEach(inject( function ( _MaxToLoan_, maxMortgageUrl ) {
        MaxMortgage = _MaxToLoan_;
        mortUrl = maxMortgageUrl
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
    
    it('testing the injections',function () {

        expect(mortUrl).toBe('http://agile-wave-86684.herokuapp.com/max-to-loan');

    });

    it('should be able to load weather data', function() {
        var result;
        var income1 = 123;
        var income2 = 324435;
        httpBackend.expectGET(mortUrl+'?income1=' + income1 + '&income2=' + income2).respond({maxToLoan:'1460511'});
        //here goes to the resolve in our controller method so the respond have to be the same than the one we expect and data will contain  what we write in the respond

        MaxMortgage.getMaxToLoan(income1, income2).then(function(data) {
            result = data;
        });

        httpBackend.flush();

        expect(result).toEqual('1460511');
    });

    it('should reject the promise when a server error occurs', function () {
        var errorFunctionInvoked = false;
        var income1 = 123;
        var income2 = 324435;
        httpBackend.expectGET(mortUrl+'?income1=' + income1 + '&income2=' + income2).respond(500, '');

        MaxMortgage.getMaxToLoan(income1, income2).then(function() {
            errorFunctionInvoked = false;
        }, function() {
            errorFunctionInvoked = true;
        });
        httpBackend.flush();
        expect(errorFunctionInvoked).toBe(true);
    });

})