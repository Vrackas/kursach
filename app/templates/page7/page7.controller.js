;(function () {
    'use strict';

    angular.module('app')
        .controller('Page7Controller', Page7Controller);


    Page7Controller.$inject = ['$state', 'toastr', '$scope','$rootScope', '$timeout'];

    function Page7Controller($state, toastr, $scope, $rootScope, $timeout) {
        let vm = this;

        vm.next = next;
        vm.symbol = symbol;

        // vm.page7.symbol;

        function symbol(v) {
            $rootScope.symbol = v;
            // return vm.page7.symbol;
        }

        function next() {
            if (vm.page7 == undefined || vm.page7.n === undefined || vm.page7.i0 === undefined || vm.page7.C === undefined || vm.page7.i1 === undefined || vm.page7.j1 === undefined || $rootScope.symbol === undefined || vm.page7.x === undefined || vm.page7.i2 === undefined || vm.page7.j2 === undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');
                console.log($rootScope.symbol);

            } else if ( vm.page7.n === 'n' && vm.page7.i0 === 'i' && vm.page7.C === 'c' && vm.page7.i1 === 'i' && vm.page7.j1 === 'j' && $rootScope.symbol === 4 && vm.page7.x === 'x' && vm.page7.i2 === 'i' && vm.page7.j2 === 'j') {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page8')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь інакша', 'Увага');
            }


        }

    }
})();