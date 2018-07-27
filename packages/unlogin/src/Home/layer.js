import React from 'react'
import ReactDOM from 'react-dom'

export default (WrappedComponent)=>{
    return class {
        constructor(props){
            this._layer=document.createElement('div');
            this._layer.className='layer unlogin';
            document.body.appendChild(this._layer);
            this.props=Object.assign({},props);
            this.reactLayer=this._render();
        }
        destroy=()=>{
            document.body.removeChild(this._layer);
            ReactDOM.unmountComponentAtNode(this._layer);
        }
        _render(){
            return ReactDOM.render(
                <WrappedComponent {...this.props} destroy={this.destroy}/>
                , this._layer);
        }
    }
}
