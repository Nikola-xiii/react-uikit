import React, {Component, PropTypes} from 'react';

class UIButton extends Component {
  constructor(props) {
    super(props);
    this.classTypes = 'uikit-button uikit-button-'+this.props.type;
  }

  render() {
    return (
      <button className={this.classTypes} disabled={this.props.disabled}>
        {this.props.icon && <i className="material-icons">{this.props.icon}</i>}
        {this.props.children}
      </button>
    )
  }
}

UIButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string
};

export default UIButton;
