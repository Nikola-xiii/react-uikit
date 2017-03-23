import React, {Component} from 'react';
import UIGrid from '../components/UIGrid';

const GridDataRows = [
  {
    id: 11,
    name: 'Test1',
    email: 'test1@test.com',
    vendor: 'LoopMe',
    company: 'Home',
    action: {
      name: 'Login',
      icon: 'input'
    }
  },
  {
    id: 12,
    name: 'Test1',
    email: 'test2@test.com',
    vendor: 'LoopMe',
    company: 'EA Sport',
    action: {
      name: 'Login',
      icon: 'input'
    }
  },
  {
    id: 13,
    name: 'Test1',
    email: 'test1@test.com',
    vendor: 'LoopMe',
    company: 'Home',
    action: {
      name: 'Login',
      icon: 'input'
    }
  },
  {
    id: 14,
    name: 'Test1',
    email: 'test2@test.com',
    vendor: 'LoopMe',
    company: 'EA Sport',
    action: {
      name: 'Login',
      icon: 'input'
    }
  }
];

const Settings = {
  headers: [
    { key: 'id', name: 'id', sortable: true, type: 'text'},
    { key: 'name', name: 'name', sortable: false, type: 'text'},
    { key: 'company', name: 'company', sortable: false, type: 'text'},
    { key: 'vendor', name: 'vendor', sortable: true, type: 'text'},
    { key: 'email', name: 'email', sortable: false, type: 'link'},
    //{ key: 'action', name: '', sortable: false, type: 'action'},
  ],
};

class GridPage extends Component {
  render() {
    return(
      <div>
        <h1>Grid component</h1>
        <UIGrid gridDataRows={GridDataRows} settings={Settings}></UIGrid>
      </div>
    )
  }
}

export default GridPage;
