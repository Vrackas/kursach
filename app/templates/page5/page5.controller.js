;(function () {
    'use strict';

    angular.module('app')
        .controller('Page5Controller', Page5Controller);


    Page5Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page5Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {
                $state.go('page6')
        }
    }
})();