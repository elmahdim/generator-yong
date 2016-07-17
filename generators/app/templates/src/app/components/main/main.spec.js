'use strict';

describe('MainController test suite: ', function() {
    var $scope;
    beforeEach(module('<%= appname %>'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('MainController', {
            $scope: $scope
        });
    }));

    it('should return the right name of the application', function() {
        expect($scope.appName).toBe('<%= appname %> generator');
    });
   
});