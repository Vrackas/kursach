;(function () {
    'use strict';

    angular.module('app')
        .controller('Page7Controller', Page7Controller);


    Page7Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page7Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page8')


        }
    }
})();