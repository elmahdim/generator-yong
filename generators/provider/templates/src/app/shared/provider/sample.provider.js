(function() {
    'use strict';
    angular
        .module('<%= appname %>.providers')
        .provider('<%= name %>', <%= name %>)
        .config(function(Provider<%= name %>) {
            Provider<%= name %>.<%= method %>("<%= value %>");
        });

    function <%= name %>() {
        var _placeholder;
        return {
            <%= method %>: function(_param) {
            _placeholder = _param;
            },
            $get: function() {
                return {
                    placeholder: _placeholder
                };
            }
        };
    }
})();