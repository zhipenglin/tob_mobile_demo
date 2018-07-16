'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { className: 'page page-follow' },
        _react2.default.createElement(
            'div',
            { className: 'title' },
            '\u5173\u6CE8\u6211\u4EEC'
        ),
        _react2.default.createElement('img', { className: 'qr-code', src: '//img.ifchange.com/static/prod/img/tob/account/qr-code3.1c3edc7.png?_place_holder_query_string_', alt: 'qr-code' }),
        _react2.default.createElement(
            'div',
            { className: 'foot' },
            '\u5173\u6CE8\u6211\u4EEC, \u4E86\u89E3\u66F4\u591A'
        )
    );
};