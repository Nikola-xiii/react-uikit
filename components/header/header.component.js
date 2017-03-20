import React, {Component} from 'react';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <header className="uikit-header">
        {this.props.children}
      </header>
    )
  }
}

export default Header;
