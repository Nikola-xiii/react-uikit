// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <img src={logo} className="logo" alt="logo" />
        </Header>
        <main>
          <Sidebar></Sidebar>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
