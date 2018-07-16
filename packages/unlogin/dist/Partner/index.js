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

var list = [['//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/tencent.4213969@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/kedaxunfei.a121c5c@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/qihu360.1d2ada5@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/jiazhaoye.10f16e0@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/meituanwang.88ba1d1@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/sike.db09153@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/jindie.3ddd184@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/ruantongdongli.f836b25@2x.png?_place_holder_query_string_'], ['//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/wensihaihui.cbbf121@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/huanqiuyigou.9682ac9@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/zhaoshangxinnuo.db7df20@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/jiaotongyinhang.07f088b@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/tongcezixun.1539186@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/zhongguopinan.28a0fa1@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/webank.97edcb4@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/guojinzhenquan.a540940@2x.png?_place_holder_query_string_'], ['//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/yixin.8d51977@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/vanke.144c982@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/lvchengjituan.0b42ffa@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/huaqiaocheng.06a214b@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/lianjia.717e7df@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/yingweida.48c7e40@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/yuandonghongxin.ff13949@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/baowoqiche.cc4f2c4@2x.png?_place_holder_query_string_'], ['//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/suidaogufen.a59d968@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/BAOSTEEL.e6ed518@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/valeo.d73a432@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/laoban.82e6053@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/Autoliv.285fbff@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/maidelong.bb31318@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/tianhua.6628ab8@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/bishengke.3188165@2x.png?_place_holder_query_string_'], ['//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/liansimaoyi.9706b7e@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/jiekeqiongsi.39c8fc8@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/CHARLES&KEITH.84682ca@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/meidi.3ae2c38@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/jiuyang.e6ccbb7@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/zhongguohangfa.1ea7fcb@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/jingongmen.4f7527d@2x.png?_place_holder_query_string_', '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/logo/yianhanweite.bcd4022@2x.png?_place_holder_query_string_']];

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
                        return _react2.default.createElement('img', { className: 'logo', key: index + '-' + i, src: logo, alt: 'logo' });
                    })
                );
            })
        )
    );
};