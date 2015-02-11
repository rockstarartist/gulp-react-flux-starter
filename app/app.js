
(function(React) {
  var ApplicationEntryPoint = require('./app.jsx');
  
  var render = function() {
    React.render(React.createElement(ApplicationEntryPoint), document.body);
  };
  
  render();
  
}(React));