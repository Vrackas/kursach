;(function () {
    'use strict';

    angular.module('app')
        .controller('Page5Controller', Page5Controller);


    Page5Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page5Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {
            if (vm.page5.test !== 1) {
                toastr.warning('Мінімізуеться сумарна вартість перевезень', 'Увага');
            } else if (vm.page5.test === 1) {
                $state.go('page6')
            }

        }
    }
})();