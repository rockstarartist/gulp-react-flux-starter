# gulp-react-flux-starter
A starter project that will use gulp, react, and flux. Front end dependency management is provided by bower, module system is browserify.

This is still a work in progress(Current Fixes under development):
* Flux has not been integrated, and automatic injection of bower dependencies is not in.
* The JSXTransformer.js needs to be concatenated into the vendors.js during a gulp dev build.
* Code cleanup is needed, in addition to unit test examples and integration of unit test frameworks.
* Gulp tasks need to be broken out and placed into their own special folder.
* Gulp tasks need a test task to match the pom file test goal.
* Need to browserify bower components.

Currently, you can build the application and serve it.

## Getting started
* Clone the project and go into the project directory.
* Install bower via nodejs: `npm install -g bower`
* Install bower plugins: `bower install`
* Install gulp via nodejs: `npm install -g gulp`
* Install project dependencies: `npm install`
* Run `gulp serve`
 * This will automatically watch any changes you make into the codebase and show updates at `http://localhost:3000/`
* Run `gulp serve:production`
 * This will minify/uglify/concatenate css, javascript etc., leaving you with a project ready for deployment.
