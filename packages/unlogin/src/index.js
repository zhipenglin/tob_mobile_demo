/**
 * @name: unlogin ;
 * @author: admin ;
 * @description: tob未登录引导页 ;
 * */
import React, {PureComponent} from 'react'
import Home from './Home'
import Introduce from './Introduce'
import Page from './Page'
import Company from './Company'
import Honor from './Honor'
import Partner from './Partner'
import Apply from './Apply'
import Follow from './Follow'
import './style.scss'

export default class extends PureComponent {
    state = {
        index: 0
    };
    handlerChange = (index) => {
        this.setState({index});
    };
    handlerSubmit = () => {
        this.setState({index: this.state.index + 1});
    };

    render() {
        const index = this.state.index;
        const {ApplyPage, hypeHeader} = this.props;
        return (
            <Page className="screen" index={this.state.index} onChange={this.handlerChange}>
                <Home hypeHeader={hypeHeader} running={index === 0} ApplyPage={ApplyPage}/>
                <Introduce hypeHeader={hypeHeader} running={index === 1}/>
                <Company/>
                <Honor/>
                <Partner/>
                <Apply><ApplyPage onSubmit={this.handlerSubmit}/></Apply>
                <Follow/>
            </Page>
        );
    }
}
