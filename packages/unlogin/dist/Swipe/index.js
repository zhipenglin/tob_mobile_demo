'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_PureComponent) {
    (0, _inherits3.default)(_class, _PureComponent);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            x: 0,
            moved: false,
            width: 0
        }, _this.handlerStart = function (e) {
            _this.startY = e.touches[0].clientY, _this.startX = e.touches[0].clientX;
            _this.stateX = _this.state.x, _this.prevX = 0;
            _this.deltaY = _this.deltaX = 0;
            _this.setState({ moved: true });
        }, _this.handlerMove = function (e) {
            _this.deltaY = _this.startY - e.touches[0].clientY, _this.deltaX = _this.startX - e.touches[0].clientX;
            var newX = _this.deltaX + _this.stateX;
            if (newX < 0 || _this.width - newX < _this.pageWidth || Math.abs(_this.deltaX) < _this.prevX || Math.abs(_this.deltaY) > Math.abs(_this.deltaX)) {
                _this.deltaX = 0;
                _this.setState({ x: _this.stateX, moved: false });
                return;
            }
            _this.setState({ x: newX });
            _this.prevX = Math.abs(_this.deltaX);
        }, _this.handlerEnd = function (e) {
            var onChange = _this.props.onChange;

            _this.setState({ moved: false });
            var newX = _this.stateX + _this.pageWidth * (_this.deltaX > 0 ? 1 : -1);
            if (Math.abs(_this.deltaX) >= 50 && newX >= 0 && _this.width - newX >= _this.pageWidth) {
                _this.setState({ x: newX });
                onChange && onChange(Math.round(newX / _this.pageWidth));
            } else {
                _this.setState({ x: _this.stateX });
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var children = this.props.children;

            this.pageWidth = document.documentElement.clientWidth;
            this.pageSize = _react2.default.Children.count(children);
            this.width = this.pageWidth * this.pageSize;
            this.setState({ width: this.width });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var children = this.props.children;

            return _react2.default.createElement(
                'div',
                { className: 'swipe' },
                _react2.default.createElement(
                    'div',
                    { className: 'swipe-inner',
                        style: {
                            width: this.state.width + 'px',
                            transform: 'translateX(' + -this.state.x + 'px)',
                            transition: this.state.moved ? '' : 'transform 400ms'
                        },
                        onTouchStart: this.handlerStart,
                        onTouchMove: this.handlerMove,
                        onTouchEnd: this.handlerEnd
                    },
                    _react2.default.Children.map(children, function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: index, className: 'swipe-item' },
                            item
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'swipe-pointer' },
                    _react2.default.Children.map(children, function (item, index) {
                        return _react2.default.createElement('div', { key: index, className: (0, _classnames2.default)("swipe-pointer-item", {
                                "active": Math.round(_this2.state.x / _this2.pageWidth) === index
                            }) });
                    })
                )
            );
        }
    }]);
    return _class;
}(_react.PureComponent);

exports.default = _class;