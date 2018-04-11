;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/page1');

        $stateProvider

            .state('page1', {
                url: '/page1',
                templateUrl: 'templates/page1/page1.html',
                controller: 'Page1Controller',
                controllerAs: 'vm',
            })
            .state('page2', {
                url: '/page2',
                templateUrl: 'templates/page2/page2.html',
                controller: 'Page2Controller',
                controllerAs: 'vm',
            })
            .state('page3', {
                url: '/page3',
                templateUrl: 'templates/page3/page3.html',
                controller: 'Page3Controller',
                controllerAs: 'vm',
            })
            .state('page4', {
                url: '/page4',
                templateUrl: 'templates/page4/page4.html',
                controller: 'Page4Controller',
                controllerAs: 'vm',
            })
            .state('page5', {
                url: '/page5',
                templateUrl: 'templates/page5/page5.html',
                controller: 'Page5Controller',
                controllerAs: 'vm',
            })
            .state('page6', {
                url: '/page6',
                templateUrl: 'templates/page6/page6.html',
                controller: 'Page6Controller',
                controllerAs: 'vm',
            })
            .state('page7', {
                url: '/page7',
                templateUrl: 'templates/page7/page7.html',
                controller: 'Page7Controller',
                controllerAs: 'vm',
            })
            .state('page8', {
                url: '/page8',
                templateUrl: 'templates/page8/page8.html',
                controller: 'Page8Controller',
                controllerAs: 'vm',
            })
            .state('page9', {
                url: '/page9',
                templateUrl: 'templates/page9/page9.html',
                controller: 'Page9Controller',
                controllerAs: 'vm',
            })
            .state('page10', {
                url: '/page10',
                templateUrl: 'templates/page10/page10.html',
                controller: 'Page10Controller',
                controllerAs: 'vm',
            })
            .state('page11', {
                url: '/page11',
                templateUrl: 'templates/page11/page11.html',
                controller: 'Page11Controller',
                controllerAs: 'vm',
            })
            .state('page12', {
                url: '/page12',
                templateUrl: 'templates/page12/page12.html',
                controller: 'Page12Controller',
                controllerAs: 'vm',
            })
            .state('page13', {
                url: '/page13',
                templateUrl: 'templates/page13/page13.html',
                controller: 'Page13Controller',
                controllerAs: 'vm',
            })
            .state('page14', {
                url: '/page14',
                templateUrl: 'templates/page14/page14.html',
                controller: 'Page14Controller',
                controllerAs: 'vm',
            })
            .state('page15', {
                url: '/page15',
                templateUrl: 'templates/page15/page15.html',
                controller: 'Page15Controller',
                controllerAs: 'vm',
            })
            .state('page16', {
                url: '/page16',
                templateUrl: 'templates/page16/page16.html',
                controller: 'Page16Controller',
                controllerAs: 'vm',
            })
            .state('page17', {
                url: '/page17',
                templateUrl: 'templates/page17/page17.html',
                controller: 'Page17Controller',
                controllerAs: 'vm',
            })


    }


})();

