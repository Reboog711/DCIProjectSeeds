# DotComIt Seed Project: TypeScript

This is a the base build script [DotComIt](http://www.dot-com-it.com) uses for creating a TypeScript project.
 
This is a work in progress.


## Install and Setup

To install the node dependencies run this from the main directory:

```
npm install
```

This will install all the required dependencies via NodeJS.

Then, open up the gulpfile.js where you can tweak directories, and your main application.

* **ProjectRoot**: Main project root; your build script files go here
    * **build**: This contains your project build; for when you run the Gulp Task
        * **maps**: Source maps are placed here if generated.
    * **node_modules**: The installed modules for NodeJS. This will be created when you run npm install, and for all intents and purposes you can ignore.
    * **src**: Your App's code goes here
        * **com**: Custom JavaScript files go here.

## Gulp Task List

* **buildTS**: A task used to process TypeScript files. It concatenates them, minimizes them, compiles them to JavaScript, and writes a single output.  By default source maps are created.
* **copyHTML**: A task to copy all HTML in the src directory to the build directory. These files are left unchanged.
* **build**: A task to create a build. It runs copyHTML and buildTS.
* **buildWatch**: A task to watch the build directories for changed HTML, JavaScript, or CSS files and re-build the app on the fly.
* **clean**: A task to delete the build directory.
* **buildProd**: A task to build a production build.  First this runs the clean task; then it runs the build process.  If you run this task source maps will not be created.

## Todo List

* Configure this seed for compiling CSS
* Configure this seed for unit Tests
* Either modify this seed, or create another seed, for building Angular 2 applications.
