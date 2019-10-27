var React = require('react');

var createReactClass = require('create-react-class');

var ProductPage = ({ match, location }) => {
    const { params: { productId } } = match;

    // getInitialState: function () {
    //     return { pid: "" };
    // },

    // componentDidMount: function () {
    //     this.setState({ pid: this.props.params.productId });
    // },

    // componentWillReceiveProps: function () {
    //     this.setState({ pid: nextProps.params.productId });
    // },


    return (
        <h1>Hey i'm product id no {productId}</h1>
    );

};

module.exports = ProductPage;