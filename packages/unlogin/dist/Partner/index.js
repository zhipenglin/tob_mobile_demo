'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Swipe = require('../Swipe');

var _Swipe2 = _interopRequireDefault(_Swipe);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = [[require('./logo/tengxun.png'), require('./logo/kedaxunfei.png'), require('./logo/lirenlizhuang.png'), require('./logo/weipinhui.png'), require('./logo/meituan.png'), require('./logo/sike.png'), require('./logo/jindie.png'), require('./logo/ruantongdongli.png')], [require('./logo/caocaozhuanche.png'), require('./logo/huanqiuyigou.png'), require('./logo/kelaite.png'), require('./logo/jiwukeji.png'), require('./logo/yingyeda.png'), require('./logo/wangxinkeji.png'), require('./logo/guangzhousaiyi.png'), require('./logo/weichaungruanjian.png')], [require('./logo/jingkedichan.png'), require('./logo/wanke.png'), require('./logo/lvcheng.png'), require('./logo/jiazhaoye.png'), require('./logo/yuexiudichan.png'), require('./logo/hongxingmeikailong.png'), require('./logo/tianhuajianzhu.png'), require('./logo/tongcezixun.png')], [require('./logo/zhongguopingan.png'), require('./logo/yangguangbaoxian.png'), require('./logo/weizhongyinhang.png'), require('./logo/yuandonghongxin.png'), require('./logo/guojinzhengquan.png'), require('./logo/qianhairenshou.png'), require('./logo/gangyin.png'), require('./logo/jiaotongyinhangxinyongka.png')], [require('./logo/zongtaiqiche.png'), require('./logo/daluqirentouzi.png'), require('./logo/faleiao.png'), require('./logo/meidi.png'), require('./logo/baogang.png'), require('./logo/baowoqiche.png'), require('./logo/laobandianqi.png'), require('./logo/qiaqia.png')]];

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { className: 'page page-partner' },
        _react2.default.createElement(
            'div',
            { className: 'title' },
            '\u5408\u4F5C\u4F01\u4E1A'
        ),
        _react2.default.createElement(
            _Swipe2.default,
            null,
            list.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'item', key: index },
                    item.map(function (logo, i) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'logo', key: index + '-' + i },
                            _react2.default.createElement('img', { src: logo, alt: 'logo' })
                        );
                    })
                );
            })
        )
    );
};