
;(function () {

    'use strict';

    angular
        .module('app.task', [])
        .directive('task', task);

    task.$inject = [];

    function task() {
        return {
            bindToController: true,
            controller: 'TaskController',
            controllerAs: 'vm',
            templateUrl: 'directives/task/task.html',
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