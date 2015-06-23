var React = require("react");
var Reflux = require("reflux");
var PageActions = require("../actions/PageActions");
var PageStore = require("../stores/PageStore");
var EditRow = require("./EditRow");

var EditTable = React.createClass({
	getInitialState: function(){
		return({
			value: 'hw',
		})
	},

	render: function(){
		return(
			<table>
				<th>Rawr</th>
				<tr><EditRow value={this.state.value}/></tr>
			</table>
			);
	}
});

module.exports = EditTable;
