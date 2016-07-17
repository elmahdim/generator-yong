(function () {
    'use strict';

    angular.module('<%= appname %>.setup', []);
    angular.module('<%= appname %>.routes', []);
    angular.module('<%= appname %>.controllers', []);
    angular.module('<%= appname %>.directives', []);
    angular.module('<%= appname %>.values', []);
    angular.module('<%= appname %>.services', []);
    angular.module('<%= appname %>.providers', []);


    var dependencies = [
        'ngRoute',<% if (ui == "material") { %>
		'ngMaterial',<% } %>
        '<%= appname %>.setup',
        '<%= appname %>.routes',
        '<%= appname %>.controllers',
        '<%= appname %>.directives',
        '<%= appname %>.values',
        '<%= appname %>.services',
        '<%= appname %>.providers'
    ];
    angular.module('<%= appname %>', dependencies);
})();
