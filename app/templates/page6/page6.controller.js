;(function () {
        'use strict';

        angular.module('app')
            .controller('Page6Controller', Page6Controller);


        Page6Controller.$inject = ['$state', 'toastr', '$scope', '$timeout','$rootScope'];

        function Page6Controller($state, toastr, $scope, $timeout, $rootScope) {
            let vm = this;

            vm.next = next;
            vm.symbol = symbol;

            function symbol(v) {
                console.log(v);
                $rootScope.symbol = v;
                // return vm.page7.symbol;
            }

            function next() {
                console.log($rootScope.symbol);
                if (vm.page6 == undefined ||  vm.page6.C === undefined || vm.page6.i1 === undefined || vm.page6.j1 === undefined || $rootScope.symbol === undefined || vm.page6.x === undefined || vm.page6.i2 === undefined || vm.page6.j2 === undefined) {
                    toastr.warning('Заповніть усі поля', 'Увага');
                    console.log($rootScope.symbol);
                } else if (vm.page6.C === 'c' && vm.page6.i1 === 'i' && vm.page6.j1 === 'j' && $rootScope.symbol === 1 && vm.page6.x === 'x' && vm.page6.i2 === 'i' && vm.page6.j2 === 'j') {
                    toastr.success('Вірно');
                    $timeout(function () {
                        $state.go('page7')
                    }, 2000);
                } else {
                    toastr.warning('Вірна відровідь Сij *Xij ', 'Увага');
                }


            }

        }
    }
)();