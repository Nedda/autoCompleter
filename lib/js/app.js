var React = require('react');
var AutoCompleter = require('./components/AutoCompleter');
var EditTable = require('./components/EditTable');

class App extends React.Component {

  render() {
    return (
      <div>
        <div class="header">
          <h1>AutoCompleter</h1>
        </div>
        <AutoCompleter/>
        <EditTable/>
      </div>
    );
  }

}

React.render(<App/>, document.getElementById('app'));
