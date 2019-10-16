var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({

    getInitialState: function () {
        return {
            items: [], newItemText: ''
        };
    },

    onChange: function (e) {
        this.setState({ newItemText: e.target.value });
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var currentItems = this.state.items;

        if (this.state.newItemText != "") {
            currentItems.push(this.state.newItemText);
            this.setState({ items: currentItems, newItemText: '' });
        }
        else { }

    },

    render: function () {

        var divStyle = {
            marginTop: 10
        };

        var headingStyle = {

        }

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>
                            {this.props.title}
                        </h3>
                    </div>
                    <div className="row panel-body">
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <button style={headingStyle} className="btn btn-primary">Add</button>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div >
        );
    }
});

module.exports = ListManager;