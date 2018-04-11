;(function () {
    'use strict';

    angular.module('app')
        .controller('Page13Controller', Page13Controller);


    Page13Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page13Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page14')


        }
    }
})();