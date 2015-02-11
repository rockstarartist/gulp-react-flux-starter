
(function (React, module, undefined) {

    module.exports = React.createClass({displayName: 'CommentBox',
        render: function () {
            return (
                    React.createElement('div', {className: "commentBox"}, "Hello, Matt Brown! I am a React Created CommentBox."));
        }
    });

}(React, module));