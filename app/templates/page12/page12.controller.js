;(function () {
    'use strict';

    angular.module('app')
        .controller('Page12Controller', Page12Controller);


    Page12Controller.$inject = ['$state', 'toastr', '$scope', '$timeout'];

    function Page12Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {
            if (vm.page12 == undefined || vm.page12.n === undefined || vm.page12.i0 === undefined || vm.page12.X === undefined || vm.page12.i1 === undefined || vm.page12.j1 === undefined || vm.page12.a === undefined || vm.page12.i2 === undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');

            } else if ( vm.page12.n === 'n' && vm.page12.i0 === '1' && vm.page12.X === 'x' && vm.page12.i1 === 'i' && vm.page12.j1 === 'j' && vm.page12.a === 'a' && vm.page12.i2 === 'i') {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page13')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь інакша', 'Увага');
            }
        }
    }
})();