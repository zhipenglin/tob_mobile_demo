import React from 'react'
import Swipe from '../Swipe'
import './style.scss'

const list=[
    [
        require('./logo/tengxun.png'),
        require('./logo/kedaxunfei.png'),
        require('./logo/lirenlizhuang.png'),
        require('./logo/weipinhui.png'),
        require('./logo/meituan.png'),
        require('./logo/sike.png'),
        require('./logo/jindie.png'),
        require('./logo/ruantongdongli.png')
    ],
    [
        require('./logo/caocaozhuanche.png'),
        require('./logo/huanqiuyigou.png'),
        require('./logo/kelaite.png'),
        require('./logo/jiwukeji.png'),
        require('./logo/yingyeda.png'),
        require('./logo/wangxinkeji.png'),
        require('./logo/guangzhousaiyi.png'),
        require('./logo/weichaungruanjian.png')
    ],
    [
        require('./logo/jingkedichan.png'),
        require('./logo/wanke.png'),
        require('./logo/lvcheng.png'),
        require('./logo/jiazhaoye.png'),
        require('./logo/yuexiudichan.png'),
        require('./logo/hongxingmeikailong.png'),
        require('./logo/tianhuajianzhu.png'),
        require('./logo/tongcezixun.png')
    ],
    [
        require('./logo/zhongguopingan.png'),
        require('./logo/yangguangbaoxian.png'),
        require('./logo/weizhongyinhang.png'),
        require('./logo/yuandonghongxin.png'),
        require('./logo/guojinzhengquan.png'),
        require('./logo/qianhairenshou.png'),
        require('./logo/gangyin.png'),
        require('./logo/jiaotongyinhangxinyongka.png')
    ],
    [
        require('./logo/zongtaiqiche.png'),
        require('./logo/daluqirentouzi.png'),
        require('./logo/faleiao.png'),
        require('./logo/meidi.png'),
        require('./logo/baogang.png'),
        require('./logo/baowoqiche.png'),
        require('./logo/laobandianqi.png'),
        require('./logo/qiaqia.png')
    ]
];

export default ()=>{
    return (
        <div className="page page-partner">
            <div className="title">合作企业</div>
            <Swipe>
                {list.map((item,index)=><div className="item" key={index}>
                    {item.map((logo,i)=><div className="logo" key={`${index}-${i}`}><img src={logo} alt="logo"/></div>)}
                </div>)}
            </Swipe>
        </div>
    );
}
