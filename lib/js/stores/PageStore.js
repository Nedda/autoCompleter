var Reflux = require('reflux');
var PageActions = require('../actions/PageActions');
var $ = require('jquery');

window.receivedData = function(data){
	debugger;
};

var PageStore = Reflux.createStore({
  _collection: [],
  listenables: PageActions,
  init() {
},

setCollection: function(newCollection){
	this._collection = newCollection;
	this.trigger('setCollection', this._collection);
},

query: function(qParam) {
	var self = this;
	$.ajax({
		url: 'https://guidebook.com/om/service/v2/search/?q=' + qParam,
		type: 'GET',
		success:function(json){
			self.setCollection(json.data);
			console.log('yay');
		},
		error:function(){
			console.log('boo');
		}
	})	
			
	}
});

module.exports = PageStore;
