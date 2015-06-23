var Reflux = require('reflux');

var PageActions = Reflux.createActions([
  "query",
  "addItem",
  "removeItem",
  "editItem"
]);

module.exports = PageActions;
