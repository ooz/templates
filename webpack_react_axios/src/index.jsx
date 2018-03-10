import React from 'react';
import { render } from 'react-dom';

import Clicker from './Clicker.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
          <h1>webpack / react / axios template</h1>
          <Clicker />
        </div>
    );
  }
}

render(<App />, document.getElementById('app'));
