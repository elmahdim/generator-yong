'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.NamedBase.extend({
    _createFileSystem: function () {
        var sourceRoot = this.sourceRoot();
        var destPath = this.destinationPath();

        var templateContext = {
            appname: this.appname,
            name: this.name
        };

        var currentPath = destPath + '/src/app/shared/services/' + this.name + '/';
        this.fs.copyTpl(sourceRoot + '/src/app/shared/service/sample.service.js', currentPath + this.name + '.js', templateContext);
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