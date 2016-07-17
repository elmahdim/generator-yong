'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.NamedBase.extend({
    _createFileSystem: function () {
        var sourceRoot = this.sourceRoot();
        var destPath = this.destinationPath();

        var templateContext = {
            appname: this.appname,
            name: this.name,
            method: this.options.method,
            value: this.options.value
        };

        var currentPath = destPath + '/src/app/shared/providers/' + this.name + '/';
        this.fs.copyTpl(sourceRoot + '/src/app/shared/provider/sample.provider.js', currentPath + this.name + '.js', templateContext);
        this.fs.copyTpl(sourceRoot + '/src/app/shared/provider/sample.spec.js', currentPath + this.name + '.spec.js', templateContext);
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