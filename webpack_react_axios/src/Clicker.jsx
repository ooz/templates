import React from 'react';

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks : 0 };
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    this.setState({
        clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div>
        Clicks: <span>{this.state.clicks}</span>
        <div><button onClick={this.onClick}>Click!</button></div>
      </div>
    );
  }
}

export default Clicker;
