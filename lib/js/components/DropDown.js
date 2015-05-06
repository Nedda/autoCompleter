var React = require("react");

var DropDown = React.createClass({
	propType: {
		data: React.PropTypes.array
	},
	render: function(){
		return(
			<ul>
			{
				this.props.data.map(function(object){
					return(<li>{object}</li>)
				})
			}
			</ul>
		)
	}
});

module.exports = DropDown;
