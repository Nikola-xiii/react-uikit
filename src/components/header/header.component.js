import React, {Component} from 'react';
import './header.component.scss';

class Header extends Component {
  render() {
    return(
      <header className="uikit-header">
        {this.props.children}
      </header>
    )
  }
}

export default Header;
