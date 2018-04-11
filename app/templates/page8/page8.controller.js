;(function () {
    'use strict';

    angular.module('app')
        .controller('Page8Controller', Page8Controller);


    Page8Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page8Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page9')

        }
    }
})();