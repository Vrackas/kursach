;(function () {
    'use strict';

    angular.module('app')
        .controller('Page11Controller', Page11Controller);


    Page11Controller.$inject = ['$state', 'toastr', '$scope','$rootScope', '$timeout'];

    function Page11Controller($state, toastr, $scope,$rootScope, $timeout) {
        let vm = this;

        vm.next = next;
        vm.symbol = symbol;



        function symbol(v) {
            $rootScope.symbol = v;
        }

        function next() {
            console.log($rootScope.symbol)
            if (vm.page11 == undefined || $rootScope.symbol === undefined  || vm.page11.X === undefined || vm.page11.i === undefined || vm.page11.j === undefined || vm.page11.O === undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');


            } else if ($rootScope.symbol === 1 && vm.page11.X === 'x' && vm.page11.i === 'i' && vm.page11.j === 'j' && vm.page11.O === '0') {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page12')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь інша', 'Увага');
            }
        }
    }
})();