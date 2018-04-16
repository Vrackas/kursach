;(function () {
    'use strict';

    angular.module('app')
        .controller('Page13Controller', Page13Controller);


    Page13Controller.$inject = ['$state', 'toastr', '$scope','$timeout'];

    function Page13Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {


            if (vm.page13 == undefined || vm.page13.m === undefined || vm.page13.i0 === undefined || vm.page13.X === undefined || vm.page13.i1 === undefined || vm.page13.j1 === undefined || vm.page13.b === undefined || vm.page13.j2 === undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');

            } else if ( vm.page13.m === 'm' && vm.page13.i0 === '1' && vm.page13.X === 'x' && vm.page13.i1 === 'i' && vm.page13.j1 === 'j' && vm.page13.b === 'b' && vm.page13.j2 === 'j') {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page14')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь інакша', 'Увага');
            }

        }
    }
})();