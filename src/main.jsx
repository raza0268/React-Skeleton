var React = require("react");
var ReactDOM = require("react-dom");
var ListManager = require("./components/ListManager.jsx");

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById("ingredient"));
ReactDOM.render(<ListManager title="ToDo" />, document.getElementById("todo"));
ReactDOM.render(<ListManager title="Eid Day" headingColor="#b31217" />, document.getElementById("eidday"));