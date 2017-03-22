'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UIMenuItem = function (_Component) {
  _inherits(UIMenuItem, _Component);

  function UIMenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UIMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UIMenuItem.__proto__ || Object.getPrototypeOf(UIMenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.iconRender = function (icon) {
      if (icon) {
        return _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          icon
        );
      }
    }, _this.subMenuRender = function (subItems) {
      if (subItems) {
        return _react2.default.createElement(
          'ul',
          { className: 'sub-menu' },
          subItems.map(function (subitem, index) {
            return _react2.default.createElement(
              'li',
              { key: index },
              _react2.default.createElement(
                'a',
                { href: subitem.routerLink },
                _react2.default.createElement(
                  'span',
                  null,
                  subitem.name
                )
              )
            );
          })
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UIMenuItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { key: this.props.item.key, className: 'uikit-menu-item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { activeClassName: 'active', to: this.props.item.routerLink },
          this.iconRender(this.props.item.icon),
          this.props.item.iconUrl && _react2.default.createElement('img', { alt: 'icon', src: this.props.item.iconUrl }),
          _react2.default.createElement(
            'span',
            null,
            this.props.item.name
          )
        ),
        this.subMenuRender(this.props.item.subItems)
      );
    }
  }]);

  return UIMenuItem;
}(_react.Component);

UIMenuItem.propTypes = {
  item: _react.PropTypes.object.isRequired
};

exports.default = UIMenuItem;