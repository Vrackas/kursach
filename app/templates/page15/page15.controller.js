;(function () {
    'use strict';

    angular.module('app')
        .controller('Page15Controller', Page15Controller);


    Page15Controller.$inject = ['$state', 'toastr', '$scope', '$timeout'];

    function Page15Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {
            if (vm.page15 == undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');
                console.log($rootScope.symbol);

            } else if (vm.page15.test === 1) {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page16')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь "Так"', 'Увага');
            }
        }
    }
})();