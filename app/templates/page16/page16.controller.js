;(function () {
    'use strict';

    angular.module('app')
        .controller('Page16Controller', Page16Controller);


    Page16Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page16Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page17')


        }
    }
})();