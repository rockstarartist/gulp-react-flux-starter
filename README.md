# gulp-react-flux-starter
A starter project that will use gulp, react, and flux. Front end dependency management is provided by bower, module system is browserify.

This is still a work in progress(Current Fixes under development):
* Flux has not been integrated, and automatic injection of bower dependencies is not in.
* Vendor CSS and Font files need to be concatenated and moved into the dist folder via a gulp task.
* The JSXTransformer.js needs to be concatenated into the vendors.js during a gulp build.
* Code cleanup is needed, in addition to unit test examples and integration of unit test frameworks.
* Gulp tasks need to be broken out and placed into their own special folder.
* POM.xml file needs to be created to allow simple project import into Netbeans, Eclipes and other IDE's.
* POM.xml file that calls gulp and npm tasks to simplify development from IDE's.

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

