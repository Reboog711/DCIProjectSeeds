# DotComIt Seed Project: Angular and Bootstrap

This is a the base build script [DotComIt](http://www.dot-com-it.com) uses for creating AngularJS projects with UI-Bootstrap.  
We wrote about this approach extensively in the bonus book of our [LearnWith](https://www.learn-with.com) series.

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
        * **com**: Custom JavaScript files go here.
        * **js**: Local JavaScript libraries go here.
    * **tests**: Put your Unit Tests Here


## Gulp Task List

* **buildJS**: A task used to process JavaScript files. It concatenates them, minimizes them with Uglify, and writes a single output.  By default source maps are created.
* **buildCSS**: A task used to process CSS files. It runs them through clean-CSS and concatenates them to a single file.  By default source maps are created.
* **copyJSLibraries**: A task to copy all JavaScript files from the src/js directory to the build/js directory.
* **copyHTML**: A task to copy all HTML in the src directory to the build directory. These files are left unchanged.
* **clean**: A task to delete the build directory.
* **build**: A task to create a build. It runs copyHTML, buildJS, buildCSS, and copyJSLibraries.
* **buildWatch**: A task to watch the build directories for changed HTML, JavaScript, or CSS files and re-build the app on the fly.
* **cleanBuild**: A task to delete the build directory first, and then run a build.
* **buildProd**: A task to build a production build.  First this runs the clean task; then it runs the build process.  If you run this task source maps will not be created.
* **test**: A Task to run Unit Tests with Karma and Jasmine.
