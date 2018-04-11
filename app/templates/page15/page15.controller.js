;(function () {
    'use strict';

    angular.module('app')
        .controller('Page15Controller', Page15Controller);


    Page15Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page15Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page16')


        }
    }
})();