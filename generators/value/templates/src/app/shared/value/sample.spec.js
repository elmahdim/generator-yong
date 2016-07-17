'use strict';

describe('<%= name %> service value test suite: ', function() {

    beforeEach(module('<%= appname %>'));

    beforeEach(inject(function($provide) {
        $provide.value('<%= name %>', '<%= value %>');
    }));

    it('<%= name %> value should return = <%= value %>', function() {
        expect('<%= value %>').toEqual('<%= value %>');
    });
});
