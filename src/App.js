import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import board from './board/board';
import test from './test/test';
class App extends Component {
  state = {}
  render() {
    console.log('app.js')
    return (
        <Switch>
          <Route path="/" exact component={board} />
          <Route path="/test" exact component={test} />
          <Redirect to="/" />
        </Switch>
    );
  }
}
export default App;
