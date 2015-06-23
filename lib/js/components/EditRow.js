var React = require("react");
var Reflux = require("reflux");
var PageActions = require("../actions/PageActions");

var EditRow = React.createClass({
	propType: {
		value: React.PropTypes.string
	},

	render: function(){
		return(
				<tr><input type="text" placeholder={this.props.value}/></tr>
			);
	}
});

module.exports = EditRow;
