import React, {Component} from 'react';
import UIButton from '../components/UIButton';

class ButtonPage extends Component {
  render() {
    return(
      <div>
        <h1>Button Component</h1>
        <h2>Button types example</h2>
        <table>
          <tr>
            <td><UIButton type="primary">Primary</UIButton></td>
            <td><UIButton type="primary" disabled={true}>Primary disabled</UIButton></td>
            <td><UIButton type="primary cancel">Primary Cancel</UIButton></td>
          </tr>
          <tr>
            <td><UIButton type="secondary">Secondary</UIButton></td>
            <td><UIButton type="secondary" disabled={true}>Secondary disabled</UIButton></td>
            <td><UIButton type="secondary cancel">Secondary cancel</UIButton></td>
          </tr>
        </table>
        <h2>Using inside project</h2>
        <pre>
          <code>
            &lt;UIButton type="primary | secondary" disabled=&#123;true | false&#125; &gt;&lt;/UIButton&gt;
          </code>
        </pre>
        <p><strong>type</strong> - Required</p>
        <p><strong>disabled</strong> - Not Required</p>
      </div>
    )
  }
}

export default ButtonPage;
