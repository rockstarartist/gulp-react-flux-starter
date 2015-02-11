
(function (React, module, undefined) {
    var CommentBox = require('./components/commentbox.js');
    var ReCommentBox = require('./components/recommentbox.jsx');
    var Chart = require('./components/chart.jsx');

    var sampleData = [
        {id: '5fbmzmtc', x: 7, y: 41, z: 6},
        {id: 's4f8phwm', x: 11, y: 45, z: 9}
    ];

    module.exports = React.createClass({
        getInitialState: function () {
            return {
                data: sampleData,
                domain: {x: [0, 30], y: [0, 100]}
            };
        },
        render: function () {

            return (
                    <div className="App">
                    <CommentBox/>
                    <ReCommentBox/>
                    <Chart data={this.state.data} domain={this.state.domain}/>
                    <div> Everything Should Have Been Rendered now. </div>
                    </div>
                    );
        }

    });
}(React, module));