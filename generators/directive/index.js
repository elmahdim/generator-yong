'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.NamedBase.extend({
    _createFileSystem: function () {
        var sourceRoot = this.sourceRoot();
        var destPath = this.destinationPath();
        var appDir = destPath + '/public/';
        var templateContext = {
            appname: this.appname,
            name: this.name,
            style: this.options.style
        };

        var currentPath = destPath + '/src/app/shared/directives/' + this.name + '/';
        this.fs.copyTpl(sourceRoot + '/public/partials/sample.html', appDir + '/partials/' + this.name + '/' + this.name + '.html', templateContext);
        this.fs.copyTpl(sourceRoot + '/src/app/shared/directive/sample.directive.js', currentPath + this.name + '.js', templateContext);

        if (this.options.style) {
            this.fs.write(currentPath + this.name + '.scss', '// auto-generated ' + this.name);
        }
    },
    initializing: function () {
    },
    configuring: function () {
    },
    writing: function () {
        this._createFileSystem();
    },
    end: function () {
    }
});