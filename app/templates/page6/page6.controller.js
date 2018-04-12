;(function () {
    'use strict';

    angular.module('app')
        .controller('Page6Controller', Page6Controller);


    Page6Controller.$inject = ['$state', 'toastr', '$scope', '$timeout'];

    function Page6Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {
            if(vm.page6 == undefined ||vm.page6.C === undefined || vm.page6.i === undefined || vm.page6.j === undefined ){
                toastr.warning('Заповніть усі поля', 'Увага');
            } else if(vm.page6.C === 'c' && vm.page6.i === 'i' && vm.page6.j === 'j'){
                toastr.success( 'Вірно');
                $timeout( function(){
                    $state.go('page7')
                }, 2000 );
            } else {
                toastr.warning('Вірна відровідь Cij', 'Увага');
            }

        }
    }
})();