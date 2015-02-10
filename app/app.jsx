
(function(React, module, undefined) {
    var CommentBox = require('./components/commentbox.js');
    var ReCommentBox = require('./components/recommentbox.jsx');   
    
    module.exports = React.createClass({
      render: function() {

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