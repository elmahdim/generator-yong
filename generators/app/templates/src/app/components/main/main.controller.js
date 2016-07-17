(function () {
    'use strict';
    angular
        .module('<%= appname %>.controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];
    function MainController($scope) {
        $scope.initialize = function () {
            console.log('@init: MainController');
            $scope.appName = "<%= appname %> generator";
        };
        $scope.initialize();
    }
})();