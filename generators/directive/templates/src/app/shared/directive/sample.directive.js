(function() {
    'use strict';
    angular
        .module('<%= appname %>.directives')
        .directive('<%= name %>', <%= name %>);

    function <%= name %>() {
        var directive = {
            restrict: 'EA',
            replace: true,
            templateUrl: 'partials/<%= name %>/<%= name %>.html',
            scope: {},
            link: function(scope, elem, attrs) {

            }
        };
        return directive;
    }
})();