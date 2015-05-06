var React = require('react');
var Page = require('./components/AutoCompleter');

class App extends React.Component {

  render() {
    return (
      <div>

        <div class="header">
          <h1>App</h1>
        </div>

        <Page/>

        <footer>
          M. Bernales
        </footer>

      </div>
    );
  }

}

React.render(<App/>, document.getElementById('app'));
