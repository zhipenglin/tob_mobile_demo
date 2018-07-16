import React, {PureComponent} from 'react'
import Content from './Content'
import Swipe from '../Swipe'
import './style.scss'

const contentList = [
    {
        name: 'zhinengzhaopin',
        title: 'AiTS智能招聘管理系统',
        desc: 'Ai技术为企业降本增效',
        info: [
            '智能人岗匹配，引领主投筛选效能飞跃',
            '沉淀招聘行为数据，多维度刻画岗位画像',
            '基于岗位推荐被动求职者，为招聘提速',
            '全渠道全流程的招聘管理流程'
        ]
    }, {
        name: 'xiaoyuanzhaopindonghu',
        title: '校园招聘解决方案',
        desc: '促进校招生产力爆发',
        info: [
            'AI招聘官网，提升雇主品牌形象',
            '灵活的流程配置，强大的批量处理',
            '扫码签到移动反馈，全流程无纸化操作',
            '实时的数据掌控 ，提升校招决策 '
        ]
    }, {
        name: 'rencaikudonghu',
        title: '云人才库解决方案',
        desc: '可能是最具性价比的招聘渠道',
        info: [
            '简历智能解析聚类，自动盘活更新',
            '首创招聘机器人e小宝， 实时去重节省成本',
            '基于岗位画像推荐高求职活跃度候选人',
            '高效复用历史简历，降低招聘成本'
        ]
    }, {
        name: 'neituidonghua',
        title: '内推解决方案',
        desc: '用大数据提高内推渠道效能',
        info: [
            '智能挖掘员工人脉关系链，内推可以更主动',
            '多种内推新玩法，引爆内推参与度',
            '员工主动出击找人才，让内推效率和效果兼备'
        ]
    }, {
        name: 'lietoufuwudonghua',
        title: '猎头服务解决方案',
        desc: '实现猎头渠道多快好省',
        info: [
            'AI匹配猎头优选简历，快速连接优质候选人',
            '猎头推荐简历自动去重，节省猎头渠道成本',
            '体验级猎头渠道管理，数据化衡量猎头转化率'
        ]
    }
];

export default class extends PureComponent {
    state = {
        index: 0
    };
    handlerChange = (index) => {
        this.setState({index});
    };

    render() {
        const {running, hypeHeader} = this.props;
        return (
            <div className="page page-introduce">
                <Swipe onChange={this.handlerChange}>
                    {contentList.map((item, index) => <Content {...item} key={item.name}
                                                               hypeHeader={hypeHeader}
                                                               running={running && index === this.state.index}/>)}
                </Swipe>
            </div>
        );
    }
}
