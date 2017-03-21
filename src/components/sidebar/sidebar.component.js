import React, {Component, PropTypes} from 'react';
import './sidebar.component.scss';

class Sidebar extends Component {
  render() {
    return (
      <aside className="uikit-sidebar">
        {this.props.chi}
      </aside>
    )
  }
}

export default Sidebar;
