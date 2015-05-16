var React = require("react");
var Reflux = require("reflux");
var PageActions = require("../actions/PageActions");
var PageStore = require("../stores/PageStore");
var EditRow = require("./EditRow");

var EditTable = React.createClass({
	getInitialState: function(){
		return({
			data: [],
		})
	},
	render: function(){
		return(
				<table>
					<th>Meow</th>
					<EditRow data={this.state.data}/>
				</table>
			);
	}
});

module.exports = EditTable;
