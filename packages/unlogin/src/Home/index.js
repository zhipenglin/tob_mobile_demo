import React,{PureComponent} from 'react'
import Hype from '../Hype'
import layer from './layer'
import Apply from '../Apply'
import './style.scss'

export default class extends PureComponent{
    handlerClick=()=>{
        const {ApplyPage}=this.props,ApplyLayer=layer(({destroy})=><Apply><i className="close" onClick={destroy}/><ApplyPage onSubmit={destroy}/></Apply>);
        new ApplyLayer();
    };
    render(){
        const {running,hypeHeader}=this.props;
        return <div className="page page-home">
            <i className="logo" />
            <Hype  className="animation" header={hypeHeader} name="bannerdonghua" running={running}/>
            <span className="slogan"/>
            <div className="bottom">
                <button className="button" onClick={this.handlerClick}>申请使用</button>
                <div className="desc">e成用户请至PC端登录</div>
            </div>
        </div>
    }
};
