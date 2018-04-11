;(function () {
    'use strict';

    angular.module('app')
        .controller('Page1Controller', Page1Controller);


    Page1Controller.$inject = ['$state'];

    function Page1Controller($state) {
        let vm = this;

        // vm.weather = data;
        vm.next = next;

        function next() {
            $state.go('page2')
        }
    }
})();