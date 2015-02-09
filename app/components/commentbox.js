
(function (React, module, undefined) {

    module.exports = React.createClass({displayName: 'CommentBox',
        render: function () {
            return (
                    React.createElement('div', {className: "commentBox"}, "Hello, world! I am a React Created CommentBox."));
        }
    });

}(React, module));