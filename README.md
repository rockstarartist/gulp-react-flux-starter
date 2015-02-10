# gulp-react-flux-starter
A starter project that will use gulp, react, and flux. Front end dependency management is provided by bower, module system is browserify.

This is still a work in progress. Flux has not been integrated, and automatic injection of bower dependencies is not in.
Vendor CSS and Font files need to be concatenated and moved into the dist folder via a gulp task.
The JSXTransformer.js needs to be concatenated into the vendors.js during a gulp build.
Code cleanup is needed, in addition to unit test examples and integration of unit test frameworks.
Gulp tasks need to be broken out and placed into their own special folder.

Currently, you can build the application and serve it.
