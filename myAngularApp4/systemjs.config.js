/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function    (global) {
    var ngVer = '@2.0.0-rc.5'; // lock in the angular package version; do not let it float to current!
    var routerVer = '@3.0.0-rc.1'; // lock router version
    var formsVer = '@0.3.0'; // lock forms version
    var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides

    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/',
     
        },
        // map tells the System loader where to look for things
        map: {
            // our app is transpiler (typescript, babel...) z within the app folder
            app : 'app', // 'dist',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular': 'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
            '@angular/router-deprecated': 'https://npmcdn.com/@angular/router-deprecated' + routerDeprecatedVer,
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
           '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
          'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
          'angular-star-rating': { defaultExtension: 'js', main: 'angular-star-rating.umd.js' }, 
          // other libraries
          'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
            
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: { main: './main.js', defaultExtension: 'js' },
            rxjs: { defaultExtension: 'js' },
            transpiler: 'plugin-babel',
           
        
        }
    });
   
})(this); 
