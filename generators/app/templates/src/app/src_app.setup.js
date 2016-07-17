(function () {
    'use strict';
    angular
        .module('<%= appname %>.setup')
        .config(appConfig);

    appConfig.$inject = ['$routeProvider', '$locationProvider'];
    function appConfig($routeProvider, $locationProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
})();