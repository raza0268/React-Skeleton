var React = require("react");
var ListItem = require("./ListItem.jsx");

var ingredient = [
  { id: 1, text: "raza" },
  { id: 2, text: "zain" },
  { id: 3, text: "ammar" },
  { id: 4, text: "mahnoor" }
];

var List = React.createClass({
  render: function() {
    var listItems = ingredient.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return <ul>{listItems}</ul>;
  }
});

module.exports = List;
