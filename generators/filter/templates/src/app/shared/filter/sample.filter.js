(function() {
    'use strict';
    angular
        .module('<%= appname %>.providers')
        .filter('<%= name %>', function(){
        return function(input){
            return input;
        }
    });
}());