;(function () {
    'use strict';

    angular.module('app')
        .controller('Page14Controller', Page14Controller);


    Page14Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page14Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {

                $state.go('page15')


        }
    }
})();