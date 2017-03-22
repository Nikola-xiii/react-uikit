import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class UIMenuItem extends Component {
  static propTypes = {
    menuItems: PropTypes.array
  };

  iconRender = function(icon) {
    if(icon) {
      return (<i className="material-icons">{icon}</i>);
    }
  };

  subMenuRender = function (subItems) {
    if(subItems) {
      return <ul className="sub-menu">
          {subItems.map((subitem, index) => <li key={index}>
            <a href={subitem.routerLink}>
              <span>{subitem.name}</span>
            </a>
          </li>)}
        </ul>;
    }
  };

  render() {
    return (
      <li key={this.props.item.key} className="uikit-menu-item">
        <Link activeClassName="active" to={this.props.item.routerLink}>
          {this.iconRender(this.props.item.icon)}
          {this.props.item.iconUrl && <img alt="icon" src={this.props.item.iconUrl}/>}
          <span>{this.props.item.name}</span>
          {this.subMenuRender(this.props.item.subItems)}
        </Link>
      </li>
    )
  }
}

export default UIMenuItem;
