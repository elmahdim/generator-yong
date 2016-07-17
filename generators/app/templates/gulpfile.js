'use strict';

var gulp         = require('gulp');
var del          = require('del');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
var Server       = require('karma').Server;
var nodemon      = require('gulp-nodemon');
var argv         = require('yargs').argv;

var options = {
    js : {
        output: 'public/assets/scripts',
        app : {
            input: ['src/app/*.js', 'src/app/**/*.js', '!src/app/**/*.spec.js'],
            dest : 'app.js'
        },
        common : {
            input: ['src/js/*.js', 'src/js/**/*.js'],
            dest : 'main.js'
        }
    },
    css : {
        input : ['src/app/**/*.scss', 'src/sass/bootstrap-sass/assets/stylesheets/bootstrap/**/*.scss', 'src/sass/main.scss'],
        output: 'public/assets/styles',
        dest : 'app.css',
        log: {
            outputStyle: 'expanded',
            errLogToConsole: true
        }
    },
    prefixer: {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }
};

gulp.task('app', function () {
    return gulp.src(options.js.app.input)
        .pipe(concat(options.js.app.dest))
        .pipe(gulp.dest(options.js.output))
        .pipe(browserSync.stream());
});

gulp.task('commonjs', function () {
    return gulp.src(options.js.common.input)
        .pipe(concat(options.js.common.dest))
        .pipe(gulp.dest(options.js.output))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    return gulp.src(options.css.input)
        .pipe(sass())
        .pipe(autoprefixer(options.css.prefixer))
        .pipe(concat(options.css.dest))
        .pipe(gulp.dest(options.css.output))
        .pipe(browserSync.stream());
});

gulp.task('clean:scripts', function () {
    return del([
        'public/assets/scripts'
    ]);
});

gulp.task('clean:styles', function () {
    return del([
        'public/assets/styles'
    ]);
});


gulp.task('serve', ['nodemon'], function() {
    browserSync.init(null, {
        injectChanges: true,
        files: ["public/**/*.*"],
        proxy: '127.0.0.1:5000',
        notify: true
	});

    gulp.watch(options.js.app.input, ['app']);
    gulp.watch(options.js.common.input, ['commonjs']);
    gulp.watch(options.css.input, ['sass']);
    gulp.watch(["public/*.html", "public/**/*.html"]).on('change', reload);
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: 'server.js'
	}).on('start', function () {
		if (!started) {
            started = true;
			cb(); 
		} 
	});
});

gulp.task('tests', function(done) {
    Server.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function() {
        done();
    });
});

gulp.task('default', ['sass', 'app', 'commonjs', 'serve', 'nodemon']);