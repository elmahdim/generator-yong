(function () {
    'use strict';
    angular
        .module('<%= appname %>.routes')
        .config(mainConfig);

    mainConfig.$inject = ['$routeProvider'];
    function mainConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : "templates/main/main.html",
            controller  : 'MainController',
            controllerAs: 'main'
        });
    }
})();