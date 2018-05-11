/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'js:': 'js/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'com',

      // angular bundles
      '@angular/core': 'js:@angular/core/bundles/core.umd.js',
      '@angular/common': 'js:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'js:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'js:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'js:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
       '@angular/common/http': 'js:@angular/common/bundles/common-http.umd.js',
      '@angular/router': 'js:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'js:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'js:rxjs',
      'tslib': 'js:tslib',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './dotComIt/sample/main/main.js',
        defaultExtension: 'js'
      },
        // added because of rxjs load problems w/ SystemJS
        // to fix operators bug: https://github.com/ReactiveX/rxjs/issues/2971
        // https://github.com/ngrx/platform/issues/842
        // https://github.com/angular/angular/blob/master/integration/hello_world__systemjs_umd/src/systemjs.config.js#L36-L43
      'rxjs/ajax': {main: 'index.js', defaultExtension: 'js' },
      'rxjs/operators': {main: 'index.js', defaultExtension: 'js' },
      'rxjs/testing': {main: 'index.js', defaultExtension: 'js' },
      'rxjs/websocket': {main: 'index.js', defaultExtension: 'js' },
      rxjs: { main: 'index.js', defaultExtension: 'js' },
      tslib: {
           main: '/tslib.js'
      }
    }



  });
})(this);
