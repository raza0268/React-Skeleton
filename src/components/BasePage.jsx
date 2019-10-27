var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var createReactClass = require('create-react-class');

var navLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "iOS",
        href: "/product/55"
    },
    {
        title: "React",
        href: "/product/67"
    }
]


var BasePage = createReactClass({
    render: function () {
        return (
            <div>
                <NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks} />
                {this.props.children}
            </div>
        );
    }
});

module.exports = BasePage;