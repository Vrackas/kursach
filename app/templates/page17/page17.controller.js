;(function () {
    'use strict';

    angular.module('app')
        .controller('Page17Controller', Page17Controller);


    Page17Controller.$inject = ['$state', 'toastr', '$scope'];

    function Page17Controller($state, toastr, $scope) {
        let vm = this;

        vm.next = next;

        function next() {
            // // if (vm.page3.test !== undefined) {
            // //     toastr.warning('Виберіть відповідь', 'Увага');
            // // }
            // // else
            //     if (vm.page3.test !== 2) {
            //     // console.log(test);
            //
            //     toastr.warning('Mатематичнa модель оптимізаційної задачі складається з цільової функції та обмежень', 'Увага');
            //
            // } else if(vm.page3.test === 2) {
            //     $state.go('page4')
            // }

        }
    }
})();