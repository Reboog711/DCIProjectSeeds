/**
 * Created by jhouser on 1/19/2017.
 */

var sourceRoot = "src/";
var destinationPath = 'build';
var typeScriptSource = [sourceRoot + "**/*.ts"];
var htmlSource = [sourceRoot + '**/*.html'];

// Compile TypeScript sources and create sourcemaps in build directory.
var mapPath = 'maps';

// JavaScript libraries
var javaScriptLibraries = [sourceRoot + 'js/**/*.js'];
var destinationPathForJSLibraries = destinationPath + '/js';

// an array of Globs that point to the Angular libraries
var angularLibraries = [
    'core-js/client/shim.min.js',
    'zone.js/dist/**',
    'reflect-metadata/Reflect.js',
    'systemjs/dist/system.src.js',
    '@angular/**/bundles/**',
    'rxjs/**/*.js',
    'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
]


// variable to determine if source maps are used or not
// by default true; but if we create a production build they are not generated
var devMode = true;

// installed w/ npm install --save-dev gulp
var gulp = require("gulp");

// installed w/ npm install --save-dev gulp-tslint
var tslint = require('gulp-tslint');

// installed w/ npm install --save-dev gulp-typescript
var tsc = require("gulp-typescript");
var tsProject = tsc.createProject("tsconfig.json");

// installed w/ npm install --save-dev gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// installed by npm install --save-dev del
var del = require('del');

// npm install --save-dev gulp-if
var gulpIf = require('gulp-if');

// installed w/ npm install --save-dev gulp-uglify
var uglify = require('gulp-uglify');

// npm install --save-dev run-sequence
var runSequence = require('run-sequence');


// Lint all custom TypeScript files.
gulp.task('tslint', function() {
    return gulp.src(typeScriptSource)
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});


// the basic task for compiling TypeScript; will run lint on the files first.
// will minimize code w/ uglify and optionally create source maps
gulp.task("buildTS", ["tslint"], function() {
    var tsResult = gulp.src(typeScriptSource)
        .pipe(gulpIf(devMode,sourcemaps.init()))
        .pipe(tsProject());
    return tsResult.js
        .pipe(uglify())
        .pipe(gulpIf(devMode,sourcemaps.write(mapPath)))
        .pipe(gulp.dest("build"));
});

// copy JS libraries custom to the project
gulp.task('copyJSLibraries', function () {
    gulp.src(javaScriptLibraries)
        .pipe(gulp.dest(destinationPathForJSLibraries));
});

// task to copy all the angular libraries
// and other dependencies instlled by Node
gulp.task('copyAngularLibraries', function () {
    // copy JS libraries custom to the project
    gulp.src(angularLibraries, {cwd: "node_modules/**"})
        .pipe(gulp.dest(destinationPathForJSLibraries));
});

// a task to copy HTML files from src to the build folder
gulp.task('copyHTML', function () {
    return gulp.src(htmlSource)
        .pipe(gulp.dest(destinationPath));
});

// a task to delete the build directory and everythying in it
var deletePath = [destinationPath + '/**']
gulp.task('clean', function () {
    return del(deletePath);
});

// Build the project.
gulp.task("build", ['buildTS', 'copyJSLibraries', 'copyAngularLibraries','copyHTML']);

// delete everything then build the project
gulp.task('cleanBuild', function () {
    runSequence('clean', 'build');
});

// build a production build
// delets the build directory w/ clean; then sets the devMode to false; and runs the build task
// devMode to true means no source maps.
gulp.task('buildProd', function(){
    devMode = false;
    runSequence('clean', 'build');
});