import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <div className="App-header">

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
