var React = require('react');
var Link = require("react-router-dom").Link;

var createReactClass = require('create-react-class');

var HomePage = createReactClass({
    render: function () {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li><Link to="/product/55">iOS Course</Link></li>
                    <li><Link to="/product/67">React Course</Link></li>
                </ul>
            </div>
        );
    }
});

module.exports = HomePage;