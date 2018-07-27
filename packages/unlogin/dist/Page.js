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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_PureComponent) {
    (0, _inherits3.default)(_class, _PureComponent);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = {
            moved: false,
            y: 0
        };

        _this.handlerStart = function (e) {
            _this.startY = e.touches[0].clientY, _this.startX = e.touches[0].clientX;
            _this.prevY = 0;
            _this.deltaY = _this.deltaX = 0;
            _this.setState({ moved: true, y: 0 });
        };

        _this.handlerMove = function (e) {
            var index = _this.props.index;

            _this.deltaY = _this.startY - e.touches[0].clientY, _this.deltaX = _this.startX - e.touches[0].clientX;
            var newY = _this.deltaY;
            if (index + newY / _this.pageHeight < 0 || index + newY / _this.pageHeight > _this.pageSize - 1 || Math.abs(_this.deltaY) < _this.prevY || Math.abs(_this.deltaX) > Math.abs(_this.deltaY)) {
                _this.deltaY = 0;
                _this.setState({ y: 0, moved: false });
                return;
            }
            _this.setState({ y: newY });
            _this.prevY = Math.abs(_this.deltaY);
        };

        _this.handlerEnd = function () {
            var _this$props = _this.props,
                index = _this$props.index,
                onChange = _this$props.onChange;

            _this.setState({ moved: false, y: 0 });
            var newY = _this.pageHeight * (_this.deltaY > 0 ? 1 : -1);
            if (Math.abs(_this.deltaY) >= 50 && index + newY / _this.pageHeight >= 0 && index + newY / _this.pageHeight <= _this.pageSize - 1) {
                onChange(Math.round(newY / _this.pageHeight) + index);
            }
        };

        _this.pageHeight = document.documentElement.clientHeight;
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var children = this.props.children;

            this.pageSize = _react2.default.Children.count(children);
            this.height = this.pageHeight * this.pageSize;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                index = _props.index,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                { className: className,
                    style: {
                        height: this.pageHeight + 'px'
                    },
                    onTouchStart: this.handlerStart,
                    onTouchMove: this.handlerMove,
                    onTouchEnd: this.handlerEnd,
                    onTouchCancel: this.handlerEnd
                },
                _react2.default.createElement(
                    'div',
                    { className: 'page-inner', style: {
                            transform: 'translateY(' + -(this.state.moved ? this.state.y + index * this.pageHeight : index * this.pageHeight) + 'px)',
                            transition: this.state.moved ? '' : 'transform 400ms'
                        } },
                    children
                )
            );
        }
    }]);
    return _class;
}(_react.PureComponent);

exports.default = _class;