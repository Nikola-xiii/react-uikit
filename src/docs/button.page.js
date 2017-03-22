import React, {Component} from 'react';
import UIButton from '../components/UIButton';

class ButtonPage extends Component {
  render() {
    return(
      <div>
        <h1>Button Component</h1>
        <h2>Button types</h2>
        <table>
          <tr>
            <td><UIButton type="primary">Primary</UIButton></td>
            <td><UIButton type="primary" disabled={true}>Primary disabled</UIButton></td>
            <td><UIButton type="primary cancel">Primary Cancel</UIButton></td>
            <td><UIButton type="secondary">Secondary</UIButton></td>
            <td><UIButton type="secondary" disabled={true}>Secondary disabled</UIButton></td>
            <td><UIButton type="secondary cancel">Secondary cancel</UIButton></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default ButtonPage;
