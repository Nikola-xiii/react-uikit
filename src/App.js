import React, { Component } from 'react';
import logo from './logo.svg';
//import Header from '../components/index'
import Header from './header.component';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <img src={logo} className="logo" alt="logo" />
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
