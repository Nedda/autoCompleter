var React = require("react");
var Reflux = require("reflux");
var DropDown = require("./DropDown");
var PageActions = require("../actions/PageActions");
var PageStore = require("../stores/PageStore");
var dummyData = ["meow", "now", "cow"];

var AutoCompleter = React.createClass({
	getInitialState: function(){
		return({
		 data: [],
		})
	},

	mixins: [Reflux.ListenerMixin],

	componentDidMount: function(){
		this.listenTo(PageStore, this.onStoreChange);
	},

	onStoreChange: function(type, payload){
		this.setState({data: payload})
	},

	handleInput: function(e){
		var keyPress = e.target.value;
		PageActions.query(keyPress);
	},

	render: function() {
    return(
      <div className="content">
	   		<input type="text" className="search" placeholder="search..." onKeyDown={this.handleInput} />
				<DropDown data={this.state.data}/>
			</div>
    );
  }
});

module.exports = AutoCompleter;
