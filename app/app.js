
(function(React) {
  var App = require('./app.jsx');
  
  var render = function() {
    React.render(React.createElement(App), document.body);
  };
  
  render();
  
}(React));