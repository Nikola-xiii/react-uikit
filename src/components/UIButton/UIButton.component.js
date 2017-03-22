import React, {Component, PropTypes} from 'react';

class UIButton extends Component {
  render() {
    return (
      <button className="uikit-button">
        {this.props.children}
      </button>
    )
  }
}

export default UIButton;
