'use strict';

describe('<%= name %> provider test suite: ', function() {

    beforeEach(module('<%= appname %>'));

    // Provider instance
    var <%= name %>;

    beforeEach(inject(function(_<%= name %>_) {
        <%= name %> = _<%= name %>_;
    }));

    it('Should get the default value = <%= value %>', function() {
        expect(<%= name %>.<%= method %>()).toBe('<%= value %>');
    });
});
