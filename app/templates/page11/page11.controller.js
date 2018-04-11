;(function () {
    'use strict';

    angular.module('app')
        .controller('Page11Controller', Page11Controller);


    Page11Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page11Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page12')


        }
    }
})();