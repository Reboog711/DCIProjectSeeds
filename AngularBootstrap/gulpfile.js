/**
 * Created by jhouser on 01/16/2017.
 *
 * install everything using npm install
 */

// variables you may want to change:

// main app location
var mainAppPath = 'dotComIt/app/app.js';


// installed w/ npm install --save-dev gulp
var gulp = require('gulp');
// installed w/ npm install --save-dev gulp-uglify
var uglify = require('gulp-uglify');
// installed w/ npm install --save-dev gulp-concat
var concat = require('gulp-concat');
// installed w/ npm install --save-dev gulp-order
var order = require('gulp-order');
// installed via npm install --save-dev clean-css
var cleanCSS = require("gulp-clean-css");
// installed via npm install --save-dev gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');
// installed by npm install --save-dev gulp del
var del = require('del');
// npm install --save-dev run-sequence
var runSequence = require('run-sequence');
// npm install --save-dev gulp-if
var gulpIf = require('gulp-if');

// npm install --save-dev karma
var karma = require('karma');

var sourceRoot = 'src/';
// JavaScript include all files for the mock services but ignore the coldFusion or nodeJS services
var javaScriptSource = [sourceRoot + 'com/**/*.js'];

// the destination file for all the JavaScript code
var javaScriptDestinationFile = 'app.min.js';

// final destination path for all files
var destinationPath = 'build';
var mapPath = 'maps';

// variable used for determining whether source maps are generated or not
var devMode = true;

gulp.task('buildJS', function() {
    gulp.src(javaScriptSource)
        .pipe(gulpIf(devMode,sourcemaps.init()))
        .pipe(order([mainAppPath]))
        .pipe(concat(javaScriptDestinationFile))
        .pipe(uglify({mangle:true}))
        .pipe(gulpIf(devMode,sourcemaps.write(mapPath)))
        .pipe(gulp.dest(destinationPath))
});

// CSS Source
var cssSource = [sourceRoot + '**/*.css'];

// destination file for all the css
var cssDestinationFile = 'app.min.css';

gulp.task('buildCSS', function () {
    gulp.src(cssSource)
        .pipe(gulpIf(devMode,sourcemaps.init()))
        .pipe(cleanCSS())
        .pipe(concat(cssDestinationFile))
        .pipe(gulpIf(devMode,sourcemaps.write(mapPath)))
        .pipe(gulp.dest(destinationPath))
});


// to copy the JavaScript libraries
var javaScriptLibraries = [sourceRoot + 'js/**/*.js'];
var destinationPathForJSLibraries = destinationPath + '/js';

gulp.task('copyJSLibraries', function () {
    gulp.src(javaScriptLibraries)
        .pipe(gulp.dest(destinationPathForJSLibraries));
});

// used to copy over the external html templates
var htmlSource = [sourceRoot + '**/*.html'];

gulp.task('copyHTML', function () {
    gulp.src(htmlSource)
        .pipe(gulp.dest(destinationPath));
});

var deletePath = [destinationPath + '/**']

gulp.task('clean', function () {
    return del(deletePath);
});

gulp.task('build', ['copyHTML', 'buildJS','buildCSS','copyJSLibraries']);

// watching for changes on the fly
gulp.task('buildWatch', ['build'], function(){
    gulp.watch(htmlSource,['copyHTML']).on('change', function(event){
        console.log('Event Type' + event.type);
        console.log('File Path' + event.path);
    })
    gulp.watch(javaScriptSource,['buildJS']).on('change', function(event){
        console.log('Event Type' + event.type);
        console.log('File Path' + event.path);
    })
    gulp.watch(cssSource,['buildCSS']).on('change', function(event){
        console.log('Event Type' + event.type);
        console.log('File Path' + event.path);
    })
    gulp.watch(javaScriptLibraries,['copyJSLibraries']).on('change', function(event){
        console.log('Event Type' + event.type);
        console.log('File Path' + event.path);
    })

});

gulp.task('cleanBuild', function () {
    runSequence('clean', 'build');
});


gulp.task('buildProd', function(){
    devMode = false;
    runSequence('clean', 'build');
});

/**
 * Run test once and exit
 */
var testRoot = 'tests/';

gulp.task('test', function () {
    var dirsToExclude = []
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        // can add other elements here; probably
        // do the exclude values so I Can easily create
        // different sets of services tests
        exclude : dirsToExclude
    }).start(gulp);
});