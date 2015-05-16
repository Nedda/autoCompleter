var React = require("react");
var Reflux = require("reflux");
var PageActions = require("../actions/PageActions");

var EditRow = React.createClass({
		
	makeRow: function(){
		return(
				<tr></tr>
			);
	},

	render: function(){
		return(
			<tr>
				<td>
					<input type="text" className="firstRowEdit" onChange={this.makeRow} />
				</td>
			</tr>
			);
	}
});

module.exports = EditRow;
