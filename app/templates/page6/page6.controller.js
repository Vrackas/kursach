;(function () {
    'use strict';

    angular.module('app')
        .controller('Page6Controller', Page6Controller);


    Page6Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page6Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {
                $state.go('page7')
        }
    }
})();