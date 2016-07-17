(function () {
    'use strict';
    angular
        .module('<%= appname %>.routes')
        .config(<%= name %>Config);

    <%= name %>Config.$inject = ['$routeProvider'];
    function <%= name %>Config($routeProvider) {
        $routeProvider
			.when('/<%= name %>', {
				templateUrl : "templates/<%= name %>/<%= name %>.html",
				controller  : '<%= name %>Controller',
				controllerAs: '<%= name %>'
			});
    }
})();