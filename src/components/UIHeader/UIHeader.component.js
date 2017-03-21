import React, {Component} from 'react';

class UIHeader extends Component {
  render() {
    return(
      <header className="uikit-header">
        {this.props.children}
      </header>
    )
  }
}

export default UIHeader;
