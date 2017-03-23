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
        <UIGrid gridDataRows={GridDataRows} settings={Settings}/>
        <h2>Using inside project</h2>
        <code>&lt;UIGrid gridDataRows=&#123;GridDataRows&#125; settings=&#123;Settings&#125;&gt;&lt;/UIGrid&gt;</code>
        <pre className="language-javascript">
          <code className="language-javascript">
            const GridDataRows = [
              &#123;
              id: 11,
              name: 'Test1',
              email: 'test1@test.com',
              vendor: 'LoopMe',
              company: 'Home',
              action: 'input'
              &#125;,
              ...
            ];
          </code>
        </pre>
        <h3>Grid settings</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            const Settings = &#123;
            headers: [
            &#123; key: 'id', name: 'id', sortable: true, type: 'text'&#125;,
            &#123; key: 'name', name: 'name', sortable: false, type: 'text'&#125;,
            &#123; key: 'company', name: 'company', sortable: false, type: 'text'&#125;,
            &#123; key: 'vendor', name: 'vendor', sortable: true, type: 'text'&#125;,
            &#123; key: 'email', name: 'email', sortable: false, type: 'link'&#125;,
            &#123; key: 'action', name: '', sortable: false, type: 'action'&#125;,
              ],
            &#125;;
          </code>
        </pre>
        <UIGrid gridDataColumns={GridDataColumns} settings={Settings}/>
      </div>
    )
  }
}

export default GridPage;
