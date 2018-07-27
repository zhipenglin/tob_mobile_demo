'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (WrappedComponent) {
    return function () {
        function _class2(props) {
            var _this = this;

            (0, _classCallCheck3.default)(this, _class2);

            this.destroy = function () {
                document.body.removeChild(_this._layer);
                _reactDom2.default.unmountComponentAtNode(_this._layer);
            };

            this._layer = document.createElement('div');
            this._layer.className = 'layer unlogin';
            document.body.appendChild(this._layer);
            this.props = (0, _assign2.default)({}, props);
            this.reactLayer = this._render();
        }

        (0, _createClass3.default)(_class2, [{
            key: '_render',
            value: function _render() {
                return _reactDom2.default.render(_react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, { destroy: this.destroy })), this._layer);
            }
        }]);
        return _class2;
    }();
};