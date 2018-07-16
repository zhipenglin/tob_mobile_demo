"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var name = _ref.name,
        desc = _ref.desc,
        img = _ref.img;

    return _react2.default.createElement(
        "div",
        { className: "honor-item" },
        _react2.default.createElement(
            "div",
            { className: "top" },
            _react2.default.createElement(
                "div",
                { className: "name" },
                name
            ),
            _react2.default.createElement(
                "div",
                { className: "desc" },
                desc
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "img" },
            _react2.default.createElement("img", { src: img, alt: desc })
        )
    );
};