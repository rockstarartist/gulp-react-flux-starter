
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
                    <i className="fa fa-camera-retro"></i> fa-camera-retro
                    </div>
                    );
        }

    });
}(React, module));
//
//(function (React, ReactRouter, module, undefined) {
//    //var Router = require('bower_components/react-router/build/global/ReactRouter'); // or var Router = ReactRouter; in browsers
//    var Router = ReactRouter;
//    var DefaultRoute = Router.DefaultRoute;
//    var Link = Router.Link;
//    var Route = Router.Route;
//    var RouteHandler = Router.RouteHandler;
//
//    var App = React.createClass({
//      render: function () {
//        return (
//          <div>
//            <header>
//              <ul>
//                <li><Link to="app">Dashboard</Link></li>
//                <li><Link to="inbox">Inbox</Link></li>
//                <li><Link to="calendar">Calendar</Link></li>
//              </ul>
//              Logged in as Jane
//            </header>
//
//            {/* this is the important part */}
//            <RouteHandler/>
//          </div>
//        );
//      }
//    });
//    
//    var Inbox = React.createClass({
//  render: function(){
//    return (
//      <div>
//        Hello Inbox!
//      </div>
//    )
//  }
//});
//
//    var Calendar = React.createClass({
//  render: function(){
//    return (
//      <div>
//        Hello Calendar!
//      </div>
//    )
//  }
//});
//
//    var Dashboard = React.createClass({
//  render: function(){
//    return (
//      <div>
//        Hello Dashboard!
//      </div>
//    )
//  }
//});
//
//    var routes = (
//      <Route name="app" path="/" handler={App}>
//        <Route name="inbox" handler={Inbox}/>
//        <Route name="calendar" handler={Calendar}/>
//        <DefaultRoute handler={Dashboard}/>
//      </Route>
//    );
//
//    Router.run(routes, function (Handler) {
//      React.render(<Handler/>, document.body);
//    });
//}(React, ReactRouter, module));