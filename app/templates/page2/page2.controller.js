;(function () {
    'use strict';

    angular.module('app')
        .controller('Page2Controller', Page2Controller);


    Page2Controller.$inject = ['$state'];

    function Page2Controller($state) {
        let vm = this;

        // vm.weather = data;
        vm.next = next;

        function next() {
            $state.go('page3')
        }
    }
})();