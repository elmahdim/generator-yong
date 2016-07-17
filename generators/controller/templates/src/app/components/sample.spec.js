'use strict';

describe('<%= name %>Controller test suite: ', function() {
    
    var $scope;
    beforeEach(module('<%= appname %>'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('<%= name %>Controller', {
            $scope: $scope
        });
    }));

    it('JavaScript Addition Operator', function() {
        expect($scope.palceholder).toEqual(3);
    });

});
