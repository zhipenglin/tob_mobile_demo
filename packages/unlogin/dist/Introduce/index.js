'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Swipe = require('../Swipe');

var _Swipe2 = _interopRequireDefault(_Swipe);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentList = [{
    name: 'zhinengzhaopin',
    title: 'AiTS智能招聘管理系统',
    desc: 'Ai技术为企业降本增效',
    info: ['智能人岗匹配，引领主投筛选效能飞跃', '沉淀招聘行为数据，多维度刻画岗位画像', '基于岗位推荐被动求职者，为招聘提速', '全渠道全流程的招聘管理流程']
}, {
    name: 'xiaoyuanzhaopindonghu',
    title: '校园招聘解决方案',
    desc: '促进校招生产力爆发',
    info: ['AI招聘官网，提升雇主品牌形象', '灵活的流程配置，强大的批量处理', '扫码签到移动反馈，全流程无纸化操作', '实时的数据掌控 ，提升校招决策 ']
}, {
    name: 'rencaikudonghu',
    title: '云人才库解决方案',
    desc: '可能是最具性价比的招聘渠道',
    info: ['简历智能解析聚类，自动盘活更新', '首创招聘机器人e小宝， 实时去重节省成本', '基于岗位画像推荐高求职活跃度候选人', '高效复用历史简历，降低招聘成本']
}, {
    name: 'neituidonghua',
    title: '内推解决方案',
    desc: '用大数据提高内推渠道效能',
    info: ['智能挖掘员工人脉关系链，内推可以更主动', '多种内推新玩法，引爆内推参与度', '员工主动出击找人才，让内推效率和效果兼备']
}, {
    name: 'lietoufuwudonghua',
    title: '猎头服务解决方案',
    desc: '实现猎头渠道多快好省',
    info: ['AI匹配猎头优选简历，快速连接优质候选人', '猎头推荐简历自动去重，节省猎头渠道成本', '体验级猎头渠道管理，数据化衡量猎头转化率']
}];

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
            index: 0
        }, _this.handlerChange = function (index) {
            _this.setState({ index: index });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                running = _props.running,
                hypeHeader = _props.hypeHeader;

            return _react2.default.createElement(
                'div',
                { className: 'page page-introduce' },
                _react2.default.createElement(
                    _Swipe2.default,
                    { onChange: this.handlerChange },
                    contentList.map(function (item, index) {
                        return _react2.default.createElement(_Content2.default, (0, _extends3.default)({}, item, { key: item.name,
                            hypeHeader: hypeHeader,
                            running: running && index === _this2.state.index }));
                    })
                )
            );
        }
    }]);
    return _class;
}(_react.PureComponent);

exports.default = _class;