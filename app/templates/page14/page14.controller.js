;(function () {
    'use strict';

    angular.module('app')
        .controller('Page14Controller', Page14Controller);


    Page14Controller.$inject = ['$state', 'toastr', '$scope', '$timeout'];

    function Page14Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {
            if (vm.page14 == undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');
            } else if (vm.page14.test === 4) {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page15')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь інакша', 'Увага');
            }



        }
    }
})();