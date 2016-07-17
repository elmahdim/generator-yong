'use strict';

describe('TasksController test suite: ', function() {
    var $scope;
    beforeEach(module('<%= appname %>'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('TasksController', {
            $scope: $scope
        });
    }));

    it('automatingTasks to be an array, with 8 items', function() {
        expect($scope.automatingTasks).toBeArray;
        expect($scope.automatingTasks.length).toEqual(8);
    });
    it("matches first task-objects with the expect key/value pairs", function() {
        expect($scope.automatingTasks[0]).toEqual(jasmine.objectContaining({
            name: 'gulp (default)'
        }));
    });
});