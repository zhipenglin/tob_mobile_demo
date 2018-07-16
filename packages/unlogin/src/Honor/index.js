import React from 'react'
import Swipe from '../Swipe'
import Item from './Item'
import './style.scss'

const dataList = [
    {
        name: 'HROOT',
        desc: '【2017大中华区最佳招聘管理软件服务商】',
        img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_1.8fb40fe.png?_place_holder_query_string_'
    },
    {
        name: '招聘与任用供应商价值大奖',
        desc: '【2017中国招聘技术创新供应商10强】',
        img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_3.0c2f479.png?_place_holder_query_string_'
    }, {
        name: 'HR智享会',
        desc: '【2017中国招聘技术创新供应商10强】',
        img: '//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_5.75d70aa.png?_place_holder_query_string_'
    },{
        name:'创业邦',
        desc:'【2017中国人工智能创新公司50强】',
        img:'//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_4.fe6b048.png?_place_holder_query_string_'
    },{
        name:'上海大学MBA教育管理中心',
        desc:'【2017年度SHU MBA卓越贡献企业奖】',
        img:'//img.ifchange.com/static/prod/img/tob/account/components/MobileSlider/src/img/reward/reward_2.024f4e8.png?_place_holder_query_string_'
    }
];

export default () => {
    return (
        <div className="page page-honor">
            <div className="title">企业荣誉</div>
            <Swipe>
                {dataList.map((item,index)=><Item {...item} key={index}/>)}
            </Swipe>
        </div>
    )
}
