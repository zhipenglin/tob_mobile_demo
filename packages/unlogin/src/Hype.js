import React,{PureComponent} from 'react'
import classnames from 'classnames'
import raf from 'raf'

export default class extends PureComponent{
    state={
        scale:1
    };
    componentDidMount(){
        const {name,header}=this.props;
        const scriptDom=document.createElement('script');
        scriptDom.type="text/javascript";
        scriptDom.charSet="utf-8";
        scriptDom.src=`${header}/${name}/${name}.hyperesources/${name}_hype_generated_script.js`;
        this.el.appendChild(scriptDom);
        const callback=()=>{
            if(window.HYPE&&window.HYPE.documents[name].isPlayingTimelineNamed()){
                const scale=document.documentElement.clientWidth/this.el.clientWidth;
                this.setState({
                    scale:document.documentElement.clientHeight<=553?scale*0.8:Math.min(1,scale)
                });
                this.animateControl();
            }else{
                raf(callback);
            }
        };
        callback();
    }
    componentDidUpdate(prevProps){
        if(prevProps.running!=this.props.running){
            this.animateControl();
        }
    }
    animateControl(){
        const {running,name}=this.props;
        const hype=window.HYPE.documents[name];
        if(hype){
            hype[running?'playTimelineNamed':'pauseTimelineNamed']();
        }
    }
    render(){
        const {className,name}=this.props;
        return <div className={classnames(className)}>
            <div id={`${name}_hype_container`} style={{
                transform:`scale(${this.state.scale})`
            }} ref={(el)=>this.el=el}></div>
        </div>
    }
}
