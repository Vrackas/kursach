;(function () {
    'use strict';

    angular.module('app')
        .controller('Page5Controller', Page5Controller);


    Page5Controller.$inject = ['$state', 'toastr', '$scope', '$timeout'];

    function Page5Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {
            if(vm.page5 == undefined){
                toastr.warning('Виберіть відповідь', 'Увага');
            }else if (vm.page5.test !== 1) {
                toastr.warning('Мінімізуеться сумарна вартість перевезень', 'Увага');
            } else if (vm.page5.test === 1) {
                toastr.success( 'Вірно');
                $timeout( function(){
                    $state.go('page6')
                }, 2000 );
            }

        }
    }
})();