;(function () {

    'use strict';

    angular
        .module('app')
        .controller('BackButtonController', BackButtonController);

    BackButtonController.$inject = ['$state'];

    function BackButtonController($state) {
        let vm = this;
        vm.back = back;

        function back() {
            window.history.back()
        }

    }
})();
