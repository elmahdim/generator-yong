(function () {
    'use strict';
    angular
        .module('<%= appname %>.routes')
        .config(taskConfig);

    taskConfig.$inject = ['$routeProvider'];
    function taskConfig($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl : "templates/tasks/tasks.html",
            controller  : 'TasksController',
            controllerAs: 'tasks'
        })
    }
})();