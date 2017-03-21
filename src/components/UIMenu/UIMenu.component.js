import React, {Component, PropTypes} from 'react';
import UIMenuItem from './UIMenuItem.component';

class UIMenu extends Component {
  static propTypes = {
    menuItems: PropTypes.array
  };

  render() {
    return (
      <div className="uikit-menu">
        <ul className="main-menu">
          {this.props.menuItems.map((item, index) => <UIMenuItem key={index} item={item}/>)}
        </ul>
      </div>
    )
  }
}

export default UIMenu;
