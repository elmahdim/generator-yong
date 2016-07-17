'use strict';

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({
    _getPrompts: function () {
        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Your project name?',
                default: this.appname
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your project: '
            },
            {
                type: 'input',
                name: 'version',
                message: 'What is your project version?',
                default: '0.0.0'
            },
            {
                type: 'input',
                name: 'license',
                message: 'Your project licensed under?',
                default: 'MIT'
            },
            {
                type: 'input',
                name: 'yourname',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            },
            {
                type: 'list',
                name: 'ui',
                message: 'Choose UI Component framework?',
				choices: [{
					name: 'Twitter Bootstrap',
					value: 'bootstrap'
				}, {
					name: 'Angular Material',
					value: 'material'
				}]
            }
        ];
        return prompts;
    },
    _saveAnswers: function (answers, callback) {
        this.appname = answers.name;
        this.appdescription = answers.description;
        this.appversion = answers.version;
        this.applicense = answers.license;
        this.appauthor = answers.yourname;
        this.appemail = answers.email;
        this.ui = answers.ui;
        callback();
    },
    _createFileSystem: function () {
        var sourceRoot = this.sourceRoot();
        var destPath = this.destinationPath();
        var appDir = destPath + '/public/';

        var templateContext = {
            appname : this.appname,
            appdescription : this.appdescription,
            appversion : this.appversion,
            applicense : this.applicense,
            appauthor : this.appauthor,
            appemail : this.appemail,
            ui : this.ui,
        };

		/* Make Static directories (/public) */
        mkdirp(appDir + 'assets/images');
        mkdirp(appDir + 'assets/fonts');

		/* Copy config files */
		if(this.ui == 'bootstrap') {
			this.fs.copyTpl(sourceRoot + '/bower.json', destPath + '/bower.json', templateContext);
			this.fs.copy(sourceRoot + '/.bowerrc', destPath + '/.bowerrc');
		}

        this.fs.copyTpl(sourceRoot + '/README.md', destPath + '/README.md', templateContext);
        this.fs.copyTpl(sourceRoot + '/package.json', destPath + '/package.json', templateContext);
        this.fs.copy(sourceRoot + '/.jshintrc', destPath + '/.jshintrc');
        this.fs.copy(sourceRoot + '/.editorconfig', destPath + '/.editorconfig');
        this.fs.copy(sourceRoot + '/karma.conf.js', destPath + '/karma.conf.js');
        this.fs.copy(sourceRoot + '/server.js', destPath + '/server.js');
        this.fs.copy(sourceRoot + '/gulpfile.js', destPath + '/gulpfile.js');
        this.fs.copy(sourceRoot + '/favicon.ico', destPath + '/favicon.ico');
        this.fs.copy(sourceRoot + '/apple-touch-icon.png', destPath + '/apple-touch-icon.png');
        this.fs.copyTpl(sourceRoot + '/public', destPath + '/public', templateContext);
        this.fs.copy(sourceRoot + '/public/.bowerrc', destPath + '/public/.bowerrc');
        this.fs.copyTpl(sourceRoot + '/src', destPath + '/src', templateContext);
    },
    initializing: function () {
        var message = chalk.bold('Welcome to yong ') + chalk.green('\n AngularJS app with ease!');
        this.log(yosay(message));
    },
    prompting: function () {
        var done = this.async();
        return this.prompt(this._getPrompts()).then(function (answers) {
            this._saveAnswers(answers, done);
        }.bind(this));
    },
    configuring: function () {
        this.config.save();
    },
    writing: function () {
        this._createFileSystem();
    },
    install: function () {
        this.installDependencies();
    },
    end : function () {
		var endMessage = chalk.inverse('\n  Get Started  ') + '\n> gulp ' + '\n> gulp serve' + '\n> gulp build' + '\n> gulp clean' + '\n> gulp test';
        this.log(endMessage);
    }
});
