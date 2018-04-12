;(function () {
    'use strict';

    angular.module('app')
        .controller('Page4Controller', Page4Controller);


    Page4Controller.$inject = ['$state', 'toastr', '$scope', '$timeout'];

    function Page4Controller($state, toastr, $scope, $timeout) {
        let vm = this;

        vm.next = next;

        function next() {
            if(vm.page4 == undefined){
                toastr.warning('Виберіть відповідь', 'Увага');
            }else if (vm.page4.test !== 1) {
                toastr.warning('xij - кількість продукції, що перевозится з ni до nj', 'Увага');
            } else if (vm.page4.test === 1) {
                 toastr.success( 'Вірно');
                 $timeout( function(){
                     $state.go('page5')
                 }, 3000 );
            }
        }
    }
})();