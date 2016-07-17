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
            name: this.name
        };

        var currentPath = destPath + '/src/app/shared/filters/' + this.name + '/';
        this.fs.copyTpl(sourceRoot + '/src/app/shared/filter/sample.filter.js', currentPath + this.name + '.filter.js', templateContext);
        this.fs.copyTpl(sourceRoot + '/src/app/shared/filter/sample.spec.js', currentPath + this.name + '.spec.js', templateContext);
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