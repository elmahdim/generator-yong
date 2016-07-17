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
            view: this.options.view
        };
        mkdirp(destPath + '/src/app/components/' + this.name);

        var currentPath = destPath + '/src/app/components/' + this.name + '/';
        this.fs.write(currentPath + this.name + '.scss', '// auto-generated ' + this.name);
        this.fs.copyTpl(sourceRoot + '/src/app/components/sample.controller.js', currentPath + this.name + '.controller.js', templateContext);

        this.fs.copyTpl(sourceRoot + '/src/app/components/sample.spec.js', currentPath + this.name + '.spec.js', templateContext);
        this.fs.copyTpl(sourceRoot + '/public/templates/sample.html', appDir + '/templates/' + this.name + '/' + this.name + '.html', templateContext);
        this.fs.copyTpl(sourceRoot + '/src/app/components/sample.routes.js', currentPath + this.name + '.routes.js', templateContext);
        if (this.options.view) {
            this.fs.copyTpl(sourceRoot + '/public/templates/view.html', appDir + '/templates/' + this.name + '/' + this.name + '_view.html', templateContext);
        }
    },
    initializing: function () {
        this.option('view', {
            desc: 'handle the details view'
        });
    },
    configuring: function () {

    },
    writing: function () {
        this._createFileSystem();
    },
    end: function () {
     this.spawnCommand('gulp', ['app']);
    }
});