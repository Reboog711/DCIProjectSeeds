# DotComIt Seed Project: Angular 2 w/ TypeScript

This is a the base build script [DotComIt](http://www.dot-com-it.com) uses for creating Angular 2 projects.
It is a work in progress, and loosely based on [another Angular2, TypeScript, Gulp project](https://github.com/kolorobot/angular2-typescript-gulp)


## Install and Setup

To install the node dependencies run this from the main directory:

```
npm install
```

This will install all the required dependencies via NodeJS.

Then, open up the gulpfile.js where you can tweak directories, and your main application.


## Directory Structure

* **ProjectRoot**: Main project root; your build script files go here
    * **build**: This contains your project build; for when you run the Gulp Task
        * **maps**: Source maps are placed here if generated.
    * **node_modules**: The installed modules for NodeJS. This will be created when you run npm install, and for all intents and purposes you can ignore.
    * **src**: Your App's code goes here
        * **com**: Custom TypeScript files go here.
        * **js**: Local JavaScript libraries go here. A systemJS configuration file is included.


## Gulp Task List

* **tslint**: A task used to verify the type script files.  Called automatically before buildTS is run. 
* **buildTS**: A task used to compile TypeScript files in the source.  It minimizes them with Uglify.  By default source maps are created.
* **copyJSLibraries**: A task to copy all JavaScript files from the src/js directory to the build/js directory.
* **copyAngularLibraries**: A task to copy all Angular JS library files from node_modules directory to the build/js directory.
* **copyHTML**: A task to copy all HTML in the src directory to the build directory. These files are left unchanged.
* **clean**: A task to delete the build directory.
* **build**: A task to create a build. It runs buildTS, copyJSLibraries, copyAngularLibraries, and copyHTML.
* **cleanBuild**: A task to delete the build directory first, and then run a build.
* **buildProd**: A task to build a production build.  First this runs the clean task; then it runs the build process.  If you run this task source maps will not be created.

## Todo List


* Create a buildWatch task
* Configure this seed for compiling CSS
* Configure this seed for unit Tests
* Figure out a way to concat the output to create a single JS File--it only appears to work if I include all Angular libraries as part of that single output file.