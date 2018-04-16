;(function () {
    'use strict';

    angular.module('app')
        .controller('Page10Controller', Page10Controller);


    Page10Controller.$inject = ['$state', 'toastr', '$scope', '$timeout'];

    function Page10Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {
            if (vm.page10 == undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');
            } else if (vm.page10.test === 1) {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page11')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь інакша', 'Увага');
            }
        }
    }
})();