;(function () {
    'use strict';

    angular.module('app')
        .controller('Page4Controller', Page4Controller);


    Page4Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page4Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {
                $state.go('page5')
        }
    }
})();