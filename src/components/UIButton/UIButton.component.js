import React, {Component, PropTypes} from 'react';

class UIButton extends Component {
  constructor(props) {
    super(props);
    this.classTypes = 'uikit-button uikit-button-'+this.props.type;
  }

  render() {
    return (
      <button className={this.classTypes} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    )
  }
}

UIButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default UIButton;
