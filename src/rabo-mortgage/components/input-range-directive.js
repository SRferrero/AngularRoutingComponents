(function () {
    'use strict';

    angular.module('components')
        .directive('inputRangeHelper', function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, elem, attrs, ctrl) {
                    //console.log(attrs, 'Scope ->',scope, ' Controller ->', ctrl);
                    // change output of range to number.
                    ctrl.$parsers.push(function(value) {
                        var valueAsFloat = parseFloat(value);
                        return isFinite(valueAsFloat) ? valueAsFloat : ctrl.$modelValue;

                    });
                }
            };
        });

})();
