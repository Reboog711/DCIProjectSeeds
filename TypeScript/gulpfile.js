/**
 * Created by jhouser on 1/7/2017.
 */

var sourceRoot = "src";

var appEntries = [sourceRoot + '/com/dotComIt/app/app.ts']

// installed w/ npm install --save-dev gulp
var gulp = require("gulp");

// installed w/ npm install --save-dev browserify
var browserify = require("browserify");
// installed w/ npm install --save-dev vinyl-source-stream
var source = require('vinyl-source-stream');
// installed w/ npm install --save-dev tsify
var tsify = require("tsify");

// used to extract map file from Browserify
// npm install --save-dev exorcist
// then force update: npm i thlorenz/exorcist#master
// https://github.com/thlorenz/exorcist/issues/42
var exorcist   = require('exorcist')

// installed w/ npm install --save-dev gulp-uglify
var uglify = require('gulp-uglify');
// installed w/ npm install --save-dev vinyl-buffer
var buffer = require('vinyl-buffer');
// npm install --save-dev gulp-if
var gulpIf = require('gulp-if');

// installed by npm install --save-dev gulp del
var del = require('del');
// npm install --save-dev run-sequence
var runSequence = require('run-sequence');

// variable to highlight the main type script file
// It is assumed all other relevant type script files
// will be referenced from this file, or one of the files
// that this references

var javaScriptDestinationFile = 'app.min.js';
var destinationPath = 'build';

var typeScriptSource = [sourceRoot + "/**/*.ts"];
var htmlSource = [sourceRoot + '/**/*.html'];


var mapPath = 'maps';
var mapFile = 'app.js.map'
var mapDestination = destinationPath + '/' + mapPath + '/' + mapFile;
var mapDestinationURL = mapPath + '/' + mapFile;

var devMode = true;

gulp.task("buildTS", function () {

    return browserify({
        compilerOptions: {
            module: "commonjs",
            target: "es5",
        },
        debug: devMode,
        entries:  appEntries
    })
        .plugin(tsify)
        .bundle()
        .pipe(exorcist(mapDestination, mapDestinationURL))
        .pipe(source(javaScriptDestinationFile))
        .pipe(buffer())
        .pipe(gulpIf(!devMode,uglify()))
        .pipe(gulp.dest(destinationPath));
});


gulp.task('copyHTML', function () {
    return gulp.src(htmlSource)
        .pipe(gulp.dest(destinationPath));
});

gulp.task('build', ['copyHTML', 'buildTS']);


// watching for changes on the fly
// This seems a lot simpler than using Watchify which is recommended in the TypeScript docs
gulp.task('buildWatch', ['build'], function(){
    gulp.watch(htmlSource,['copyHTML']).on('change', function(event){
        console.log('Event Type' + event.type);
        console.log('File Path' + event.path);
    })
    gulp.watch(typeScriptSource,['buildTS']).on('change', function(event){
        console.log('Event Type' + event.type);
        console.log('File Path' + event.path);
    })
});

var deletePath = [destinationPath + '/**']
gulp.task('clean', function () {
    return del(deletePath);
});

gulp.task('buildProd', function(){
    devMode = false;
    runSequence('clean', 'build');
});