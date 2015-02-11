
(function (React, module, undefined) {
    var CommentBox = require('./components/commentbox.js');
    var ReCommentBox = require('./components/recommentbox.jsx');
    var Chart = require('./components/chart.jsx');

    var sampleData = [
        {id: '5fbmzmtc', x: 7, y: 41, z: 6},
        {id: 's4f8phwm', x: 11, y: 45, z: 9},
        {id: 's4f8phw1', x: 5, y: 32, z: 3},
        {id: 's4f8phw2', x: 8, y: 18, z: 12}
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