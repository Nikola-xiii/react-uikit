import React, {Component, PropTypes} from 'react';

class UIMenu extends Component {
  static propTypes = {
    menuItems: PropTypes.array
  };

  render() {
    return (
      <div className="uikit-menu">
        <ul className="main-menu">
          {this.props.menuItems.map((item) =>
            <li className="uikit-menu-item">
              <a href={item.routerLink}>
                {item.icon && <i className="material-icons">{item.icon}</i>}
                {item.iconUrl && <img alt="icon" src={item.iconUrl}/>}
                <span>{item.name}</span>
                {item.subItems && <ul className="sub-menu">
                  {item.subItems.map((subitem) => <li>
                    <a href={subitem.routerLink}>
                      <span>{subitem.name}</span>
                    </a>
                  </li>)}
                </ul>}
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default UIMenu;
