;(function () {
    'use strict';

    angular.module('app')
        .controller('Page8Controller', Page8Controller);


    Page8Controller.$inject = ['$state', 'toastr', '$scope','$rootScope', '$timeout'];

    function Page8Controller($state, toastr, $scope, $rootScope, $timeout) {


        let vm = this;

        vm.next = next;
        vm.symbol = symbol;



        function symbol(v) {
            $rootScope.symbol = v;
        }

        function next() {
            if (vm.page8 == undefined || vm.page8.n0 === undefined || vm.page8.i0 === undefined|| vm.page8.n1 === undefined || vm.page8.j0 === undefined || vm.page8.C === undefined || vm.page8.i1 === undefined || vm.page8.j1 === undefined || $rootScope.symbol === undefined || vm.page8.x === undefined || vm.page8.i2 === undefined || vm.page8.j2 === undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');
                console.log($rootScope.symbol);

            } else if (vm.page8.n0 === 'n' && vm.page8.i0 === 'i' && vm.page8.n1 === 'm' && vm.page8.j0 === 'j' && vm.page8.C === 'c' && vm.page8.i1 === 'i' && vm.page8.j1 === 'j' && $rootScope.symbol === 2 && vm.page8.x === 'x' && vm.page8.i2 === 'i' && vm.page8.j2 === 'j') {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page9')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь інакша', 'Увага');
            }


        }




    }

})();