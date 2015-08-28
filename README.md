# gulp-react-flux-starter
A starter project that will use gulp, react, and flux. Front end dependency management is provided by bower, module system is browserify.

SASS is used for SCSS, you can still use css if you prefer.

This project is now ES6 enhanced, so you can develop your codebase in ES6, and you can also continue to use ES5
if you prefer.

This is still a work in progress, please see issues at https://github.com/rockstarartist/gulp-react-flux-starter/issues

Currently, you can build the application and serve it.

Next Feature(s) to be added: PhantomJS, Mocha, Chai Testing!!!

## Getting started
* Clone the project and go into the project directory.
* Install bower via nodejs: `npm install -g bower`
* Install bower plugins: `bower install`
* Install gulp via nodejs: `npm install -g gulp`
* Install project dependencies: `npm install`
* Make sure you have ruby installed on your system (If you are on MacOSX or Linux, you probably already have ruby, type ruby -v in your terminal to make sure.), then type gem install scss-lint in your terminal.
* Run `gulp serve`
 * This will automatically watch any changes you make into the codebase and show updates at `http://localhost:3000/` (You may need to refresh your browser when you first run gulp serve)
* Run `gulp serve:production`
 * This will minify/uglify/concatenate css, javascript etc., leaving you with a project ready for deployment.

