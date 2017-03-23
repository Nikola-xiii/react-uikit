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
    { key: 'action', name: '', sortable: false, type: 'action'},
  ],
};

const GridDataColumns = {
  id: [11, 12, 13, 14],
  name: ['Test1', 'Test2', 'Test3', 'Test4'],
  email: ['test1@test.com', 'test2@test.com', 'test3@test.com', 'test4@test.com'],
  vendor: ['LoopMe', '', 'EA', 'LoopMe'],
  company: ['LoopMe', 'LoopMe', 'LoopMe', 'LoopMe'],
  action: [{
    name: 'Login',
    icon: 'input'
  }, {
    name: 'Login',
    icon: 'input'
  }, {
    name: 'Login',
    icon: 'input'
  }, {
    name: 'Login',
    icon: 'input'
  }]
};

class GridPage extends Component {
  render() {
    return(
      <div>
        <h1>Grid component</h1>
        <h2>Grid view</h2>
        <h2>Using inside project use Row Structure</h2>
        <pre className="language-markup">
          <code className="language-markup">
            {`<UIGrid gridDataRows={GridDataRows} settings={Settings}></UIGrid>`}
          </code>
        </pre>
        <UIGrid gridDataRows={GridDataRows} settings={Settings}/>
        <h3>Data structure settings</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            {`const GridDataRows = [
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
  ...
  ]`}
          </code>
        </pre>
        <h3>Grid settings</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            {`const Settings = {
  headers: [
    { key: 'id', name: 'id', sortable: true, type: 'text'},
    { key: 'name', name: 'name', sortable: false, type: 'text'},
    { key: 'company', name: 'company', sortable: false, type: 'text'},
    { key: 'vendor', name: 'vendor', sortable: true, type: 'text'},
    { key: 'email', name: 'email', sortable: false, type: 'link'},
    { key: 'action', name: '', sortable: false, type: 'action'},
  ],
};`}
          </code>
        </pre>
        <h2>Using inside project use Column Structure</h2>
        <pre className="language-markup">
          <code className="language-markup">
            {`<UIGrid gridDataRows={GridDataColumns} settings={Settings}></UIGrid>`}
          </code>
        </pre>
        <UIGrid gridDataColumns={GridDataColumns} settings={Settings}/>
        <h3>Data structure settings</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            {`const GridDataColumns = {
  id: [11, 12, 13, 14],
  name: ['Test1', 'Test2', 'Test3', 'Test4'],
  email: ['test1@test.com', 'test2@test.com', 'test3@test.com', 'test4@test.com'],
  vendor: ['LoopMe', '', 'EA', 'LoopMe'],
  company: ['LoopMe', 'LoopMe', 'LoopMe', 'LoopMe'],
  action: [{
    name: 'Login',
    icon: 'input'
  }, {
    name: 'Login',
    icon: 'input'
  }, {
    name: 'Login',
    icon: 'input'
  }, {
    name: 'Login',
    icon: 'input'
  }]
};`}
          </code>
        </pre>
        <h3>Grid settings</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            {`const Settings = {
  headers: [
    { key: 'id', name: 'id', sortable: true, type: 'text'},
    { key: 'name', name: 'name', sortable: false, type: 'text'},
    { key: 'company', name: 'company', sortable: false, type: 'text'},
    { key: 'vendor', name: 'vendor', sortable: true, type: 'text'},
    { key: 'email', name: 'email', sortable: false, type: 'link'},
    { key: 'action', name: '', sortable: false, type: 'action'},
  ],
};`}
          </code>
        </pre>
      </div>
    )
  }
}

export default GridPage;
