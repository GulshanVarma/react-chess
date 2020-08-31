import React, { Component } from 'react';
import './App.css';
import InitGame from './containers/initGame'

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <InitGame />
      </div>
    );
  }
}

export default App;