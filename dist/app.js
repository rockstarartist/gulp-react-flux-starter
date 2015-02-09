(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

(function(React) {
  var App = require('./app.jsx');
  
  var render = function() {
    React.render(React.createElement(App), document.body);
  };
  
  render();
  
}(React));

},{"./app.jsx":2}],2:[function(require,module,exports){

(function(React, module, undefined) {
    var CommentBox = require('./components/commentbox.js');
    var ReCommentBox = require('./components/recommentbox.jsx');   
    
    module.exports = React.createClass({displayName: "exports",
      render: function() {
        //Render a non-JSX React Element
//        React.render(
//            React.createElement(CommentBox, null),
//            document.getElementById('main-content')
//            );
        //Render a JSX React Element
//                React.render(
//            <CommentBox />,
//            document.getElementById('recontent')
//        );

        return (
            React.createElement("div", null, 
            React.createElement(CommentBox, null), 
            React.createElement(ReCommentBox, null), 
            React.createElement("div", null, "Everything Should Have Been Rendered now.")
                        )
                );

      }
      
    });  
}(React, module));

},{"./components/commentbox.js":3,"./components/recommentbox.jsx":4}],3:[function(require,module,exports){

(function (React, module, undefined) {

    module.exports = React.createClass({displayName: 'CommentBox',
        render: function () {
            return (
                    React.createElement('div', {className: "commentBox"}, "Hello, world! I am a React Created CommentBox."));
        }
    });

}(React, module));

},{}],4:[function(require,module,exports){
/** @jsx React.DOM */

(function (React, module, undefined) {

module.exports = React.createClass({displayName: "exports",
    
      render: function() {
        return (
          React.createElement("div", {className: "commentBox"}, 
            "Hello, world! I am a .JSX React Created CommentBox."
          )
        );
      }
    });
    
}(React, module));

},{}]},{},[1]);
