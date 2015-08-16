# gulp-react-flux-starter
A starter project that will use gulp, react, and flux. Front end dependency management is provided by bower, module system is browserify.

This is still a work in progress, please see issues at https://github.com/rockstarartist/gulp-react-flux-starter/issues

Currently, you can build the application and serve it.

## Getting started
* Clone the project and go into the project directory.
* Install bower via nodejs: `npm install -g bower`
* Install bower plugins: `bower install`
* Install gulp via nodejs: `npm install -g gulp`
* Install project dependencies: `npm install`
* Run `gulp serve`
 * This will automatically watch any changes you make into the codebase and show updates at `http://localhost:3000/` (You may need to refresh your browser when you first run gulp serve)
* Run `gulp serve:production`
 * This will minify/uglify/concatenate css, javascript etc., leaving you with a project ready for deployment.

