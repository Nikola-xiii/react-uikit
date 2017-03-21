// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UIHeader from './components/UIHeader';
import UISidebar from './components/UISidebar';
import UIMenu from './components/UIMenu';
import Readme from './docs/readme.page';
import MenuDoc from './docs/menu.page';
import './App.scss';

const menuItems = [
  {
    name: 'Readme',
    routerLink: '/readme',
    icon: 'live_help',
    iconUrl: ''
  },
  {
    name: 'Menu',
    id: "menu",
    active: true,
    routerLink: '/menu',
    icon: 'menu',
    iconUrl: '',
    subItems: [
      { name: 'SubItem 1', id: "menu", routerLink: '' },
      { name: 'SubItem 2', id: "menu", routerLink: '' },
      { name: 'SubItem 3', id: "menu", routerLink: '' },
      { name: 'SubItem 4', id: "menu", routerLink: '' },
    ]
  },
  {
    name: 'Grid',
    id: "grid",
    active: true,
    routerLink: '/grid',
    icon: 'view_comfy',
    iconUrl: '',
  }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <UIHeader>
          <img src={logo} className="logo" alt="logo" />
        </UIHeader>
        <main>
          <UISidebar>
            <UIMenu menuItems={menuItems}></UIMenu>
          </UISidebar>
          <Router>
            <div className="content">
              <Route exact path="/" component={Readme}/>
              <Route path="/readme" component={Readme}/>
              <Route path="/menu" component={MenuDoc}/>
            </div>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
