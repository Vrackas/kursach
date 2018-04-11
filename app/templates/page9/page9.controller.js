;(function () {
    'use strict';

    angular.module('app')
        .controller('Page9Controller', Page9Controller);


    Page9Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page9Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page10')


        }
    }
})();