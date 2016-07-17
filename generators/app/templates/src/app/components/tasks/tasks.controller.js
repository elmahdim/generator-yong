(function () {
    'use strict';
    angular
        .module('<%= appname %>.controllers')
        .controller('TasksController', TasksController);

    TasksController.$inject = ['$scope'];
    function TasksController($scope) {
        console.log('@init: TasksController');
        $scope.initialize = function () {

            $scope.automatingTasks = [
                {
                    name : 'gulp (default)',
                    desc : 'Runs these tasks: [sass, app, commonjs, serve, nodemon]'
                },
                {
                    name : 'gulp app',
                    desc : 'Concatenates AngularJS .js files into public/assets/scripts/app.js'
                },
                {
                    name : 'gulp commonjs',
                    desc : 'Concatenates non AngularJS .js files into public/assets/scripts/main.js'
                },
                {
                    name : 'gulp sass',
                    desc : 'Complie all .scss files into public/assets/styles/app.css'
                },
                {
                    name : 'gulp clean:scripts',
                    desc : 'Deletes public/scripts directory'
                },
                {
                    name : 'gulp clean:styles',
                    desc : 'Deletes public/styles directory'
                },
                {
                    name : 'gulp serve',
                    desc : 'has nodemon injected, runs browserSync and server setup'
                },
                {
                    name : 'gulp test',
                    desc : 'Runs karma looks for *.spec.js all overall the app and test on [chrome,firefox]'
                }
            ];

        };
        $scope.initialize();
    }
})();