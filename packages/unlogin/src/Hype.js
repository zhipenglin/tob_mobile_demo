import React,{PureComponent} from 'react'
import classnames from 'classnames'
import raf from 'raf'

export default class extends PureComponent{
    componentDidMount(){
        const {name,header}=this.props;
        const scriptDom=document.createElement('script');
        scriptDom.type="text/javascript";
        scriptDom.charSet="utf-8";
        scriptDom.src=`${header}/${name}/${name}.hyperesources/${name}_hype_generated_script.js`;
        this.el.append(scriptDom);
        const callback=()=>{
            if(window.HYPE&&window.HYPE.documents[name].isPlayingTimelineNamed()){
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
        return <div id={`${name}_hype_container`} className={classnames(className)} ref={(el)=>this.el=el}></div>
    }
}
