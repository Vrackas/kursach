;(function () {
    'use strict';

    angular.module('app')
        .controller('Page10Controller', Page10Controller);


    Page10Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page10Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page10')


        }
    }
})();