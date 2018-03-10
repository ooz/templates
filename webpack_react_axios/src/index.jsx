import React from 'react';
import { render } from 'react-dom';

import Clicker from './Clicker.jsx';
import { AxiosGetter, AxiosPoster } from './AxiosRequesters.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
          <h1>webpack / react / axios template</h1>
          <Clicker />
          <AxiosGetter />
          <AxiosPoster />
        </div>
    );
  }
}

render(<App />, document.getElementById('app'));
