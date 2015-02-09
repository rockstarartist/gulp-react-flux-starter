
(function(React, module, undefined) {
    var CommentBox = require('./components/commentbox.js');
    var ReCommentBox = require('./components/recommentbox.jsx');   
    
    module.exports = React.createClass({
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
            <div>
            <CommentBox />
            <ReCommentBox />
            <div>Everything Should Have Been Rendered now.</div>
                        </div>
                );

      }
      
    });  
}(React, module));