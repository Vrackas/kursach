;(function () {
    'use strict';

    angular.module('app')
        .controller('Page12Controller', Page12Controller);


    Page12Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page12Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page13')


        }
    }
})();