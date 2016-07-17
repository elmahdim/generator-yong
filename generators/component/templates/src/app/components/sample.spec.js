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
    // placeholder test
    it('should return 3', function() {
        expect(1 + 2).toEqual(3);
    });
});
