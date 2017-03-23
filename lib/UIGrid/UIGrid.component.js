'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UIButton = require('../UIButton');

var _UIButton2 = _interopRequireDefault(_UIButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridHead = function GridHead(_ref) {
  var headers = _ref.headers;

  return _react2.default.createElement(
    'tbody',
    null,
    _react2.default.createElement(
      'tr',
      null,
      headers.map(function (header, index) {
        return _react2.default.createElement(
          'th',
          { key: index },
          header.sortable && _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'arrow_downward'
          ),
          _react2.default.createElement(
            'span',
            null,
            header.name
          )
        );
      })
    )
  );
};

var GridRow = function GridRow(_ref2) {
  var row = _ref2.row,
      headers = _ref2.headers,
      index = _ref2.index,
      columns = _ref2.columns;

  if (row) {
    return _react2.default.createElement(
      'tr',
      { key: index },
      headers.map(function (header, i) {
        return _react2.default.createElement(GridCell, { index: i, value: row[header.key], type: header.type });
      })
    );
  }

  if (columns) {
    var rowElement = columns.id.map(function (id, index) {
      return _react2.default.createElement(
        'tr',
        null,
        headers.map(function (header, i) {
          return _react2.default.createElement(GridCell, { value: columns[header.key][index], type: header.type });
        })
      );
    });

    return _react2.default.createElement(
      'tbody',
      null,
      rowElement
    );
  }
};

var GridCell = function GridCell(_ref3) {
  var value = _ref3.value,
      type = _ref3.type,
      index = _ref3.index;

  if (type === 'text') return _react2.default.createElement(
    'td',
    { key: index },
    value
  );
  if (type === 'link') return _react2.default.createElement(
    'td',
    { key: index },
    _react2.default.createElement(
      'a',
      { href: value },
      value
    )
  );
  if (type === 'action') return _react2.default.createElement(
    'td',
    { key: index },
    _react2.default.createElement(_UIButton2.default, { icon: value.icon, type: 'icon' })
  );
};

var UIGrid = function (_Component) {
  _inherits(UIGrid, _Component);

  function UIGrid() {
    _classCallCheck(this, UIGrid);

    return _possibleConstructorReturn(this, (UIGrid.__proto__ || Object.getPrototypeOf(UIGrid)).apply(this, arguments));
  }

  _createClass(UIGrid, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'table',
        { className: 'uikit-grid' },
        _react2.default.createElement(GridHead, { headers: this.props.settings.headers }),
        this.props.gridDataRows && _react2.default.createElement(
          'tbody',
          null,
          this.props.gridDataRows.map(function (row, index) {
            return _react2.default.createElement(GridRow, { key: index, row: row, headers: _this2.props.settings.headers });
          })
        ),
        this.props.gridDataColumns && _react2.default.createElement(GridRow, { columns: this.props.gridDataColumns, headers: this.props.settings.headers })
      );
    }
  }]);

  return UIGrid;
}(_react.Component);

UIGrid.PropTypes = {
  gridDataRows: _react.PropTypes.array,
  gridDataColumns: _react.PropTypes.object,
  settings: _react.PropTypes.object.isRequired
};

exports.default = UIGrid;