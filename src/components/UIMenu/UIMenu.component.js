import React, {Component, PropTypes} from 'react';
import UIMenuItem from './UIMenuItem.component';

class UIMenu extends Component {
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

UIMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
};

export default UIMenu;
