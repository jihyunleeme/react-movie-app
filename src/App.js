import React from 'react';
import propTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => { this.setState(current => ({ count: ++current.count})) }
  minus = () => { this.setState(current => ({ count: --current.count })) }

  render() {
    return (
      <>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </>
    );
  }
}

export default App;
