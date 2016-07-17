(function () {
    'use strict';
    angular
        .module('<%= appname %>.controllers')
        .controller('<%= name %>Controller', <%= name %>Controller);

    <%= name %>Controller.$inject = ['$scope'];
    function <%= name %>Controller($scope) {
        console.log('@init: <%= name %>Controller');
        $scope.initialize = function () {
			
		};
        $scope.initialize();
    }
})();