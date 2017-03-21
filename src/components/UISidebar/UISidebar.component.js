import React, {Component, PropTypes} from 'react';
import './UISidebar.component.scss';

class UISidebar extends Component {
  static propTypes = {
    color: PropTypes.string
  };

  //static colorClass = "uikit-sidebar-" + this.props.color;

  render() {
    return (
      <aside className="uikit-sidebar">
        {this.props.children}
        {this.props.color}
      </aside>
    )
  }
}

export default UISidebar;
