angular.module('components')
    .factory('UpdateInput',[function () {
        var sumBrutos = {sum:0};
        return {
            updateSum: function (maxMort) {
                sumBrutos.sum = maxMort ;
            },
            getSum: function () {
                return sumBrutos;
            }
        }
    }]);
