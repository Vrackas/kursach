;(function () {

    'use strict';

    angular
        .module('app.back_button', [])
        .directive('backButton', backButton);

    backButton.$inject = [];

    function backButton() {
        return {
            bindToController: true,
            controller: 'BackButtonController',
            controllerAs: 'vm',
            templateUrl: 'directives/back_button/back_button.html',
            link: link,
            restrict: 'AE',
            scope: {
                model: '='
            }
        };


        function link(scope, element, attrs) {

        }
    }
})();