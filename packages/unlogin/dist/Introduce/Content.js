'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hype = require('../Hype');

var _Hype2 = _interopRequireDefault(_Hype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var title = _ref.title,
        desc = _ref.desc,
        info = _ref.info,
        name = _ref.name,
        running = _ref.running,
        hypeHeader = _ref.hypeHeader;

    return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
            'div',
            { className: 'top' },
            _react2.default.createElement(
                'div',
                { className: 'title' },
                title
            ),
            _react2.default.createElement(
                'div',
                { className: 'desc' },
                desc,
                ' '
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'info' },
            info.map(function (text, i) {
                return _react2.default.createElement(
                    'div',
                    { key: i, className: 'item' },
                    text
                );
            })
        ),
        _react2.default.createElement(_Hype2.default, { className: 'animation', header: hypeHeader, name: name, running: running })
    );
};