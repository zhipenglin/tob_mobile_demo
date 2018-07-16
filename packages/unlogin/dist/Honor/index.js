'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Swipe = require('../Swipe');

var _Swipe2 = _interopRequireDefault(_Swipe);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataList = [{
    name: 'HROOT',
    desc: '【2017大中华区最佳招聘管理软件服务商】',
    img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_1.8fb40fe.png?_place_holder_query_string_'
}, {
    name: '招聘与任用供应商价值大奖',
    desc: '【2017中国招聘技术创新供应商10强】',
    img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_3.0c2f479.png?_place_holder_query_string_'
}, {
    name: 'HR智享会',
    desc: '【2017中国招聘技术创新供应商10强】',
    img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_5.75d70aa.png?_place_holder_query_string_'
}, {
    name: '创业邦',
    desc: '【2017中国人工智能创新公司50强】',
    img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_4.fe6b048.png?_place_holder_query_string_'
}, {
    name: '上海大学MBA教育管理中心',
    desc: '【2017年度SHU MBA卓越贡献企业奖】',
    img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_2.024f4e8.png?_place_holder_query_string_'
}];

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { className: 'page page-honor' },
        _react2.default.createElement(
            'div',
            { className: 'title' },
            '\u4F01\u4E1A\u8363\u8A89'
        ),
        _react2.default.createElement(
            _Swipe2.default,
            null,
            dataList.map(function (item, index) {
                return _react2.default.createElement(_Item2.default, (0, _extends3.default)({}, item, { key: index }));
            })
        )
    );
};