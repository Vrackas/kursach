;(function () {
    'use strict';

    angular.module('app')
        .controller('Page9Controller', Page9Controller);


    Page9Controller.$inject = ['$state', 'toastr', '$scope','$rootScope', '$timeout'];

    function Page9Controller($state, toastr, $scope, $rootScope, $timeout) {
        let vm = this;

        vm.next = next;
        vm.direct = direct;



        function direct(v) {
            $rootScope.direct = v;
        }
        function next() {
            if ($rootScope.direct === undefined) {
                toastr.warning('Заповніть усі поля', 'Увага');
                console.log($rootScope.symbol);

            } else if ($rootScope.direct === 1) {
                toastr.success('Вірно');
                $timeout(function () {
                    $state.go('page10')
                }, 2000);
            } else {
                toastr.warning('Вірна відровідь min', 'Увага');
            }
        }
    }
})();