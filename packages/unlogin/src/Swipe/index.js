import React, {PureComponent} from 'react'
import classnames from 'classnames'
import './style.scss'

export default class extends PureComponent {
    state = {
        x: 0,
        moved: false,
        width: 0
    };
    handlerStart = (e) => {
        this.startY = e.touches[0].clientY, this.startX = e.touches[0].clientX;
        this.stateX = this.state.x, this.prevX = 0;
        this.deltaY = this.deltaX = 0;
        this.setState({moved: true});
    };
    handlerMove = (e) => {
        this.deltaY = this.startY - e.touches[0].clientY, this.deltaX = this.startX - e.touches[0].clientX;
        const newX = this.deltaX + this.stateX;
        if (newX < 0 || this.width - newX < this.pageWidth || Math.abs(this.deltaX) < this.prevX || Math.abs(this.deltaY) > Math.abs(this.deltaX)) {
            this.deltaX = 0;
            this.setState({x: this.stateX, moved: false});
            return;
        }
        this.setState({x: newX});
        this.prevX = Math.abs(this.deltaX);
    };
    handlerEnd = (e) => {
        const {onChange}=this.props;
        this.setState({moved:false});
        const newX=this.stateX+this.pageWidth*(this.deltaX>0?1:-1);
        if(Math.abs(this.deltaX)>=50&&newX>=0&&this.width-newX>=this.pageWidth){
            this.setState({x:newX});
            onChange&&onChange(Math.round(newX/this.pageWidth));
        }else{
            this.setState({x:this.stateX});
        }
    };

    componentDidMount() {
        const {children} = this.props;
        this.pageWidth = document.documentElement.clientWidth;
        this.pageSize = React.Children.count(children);
        this.width = this.pageWidth * this.pageSize;
        this.setState({width: this.width});
    }

    render() {
        const {children} = this.props;
        return <div className="swipe">
            <div className="swipe-inner"
                 style={{
                     width: `${this.state.width}px`,
                     transform:`translateX(${-this.state.x}px)`,
                     transition:this.state.moved?'':`transform 400ms`
                 }}
                 onTouchStart={this.handlerStart}
                 onTouchMove={this.handlerMove}
                 onTouchEnd={this.handlerEnd}
            >
                {React.Children.map(children, (item, index) => <div key={index} className="swipe-item">{item}</div>)}
            </div>
            <div className="swipe-pointer">
                {React.Children.map(children, (item, index) => <div key={index} className={classnames("swipe-pointer-item",{
                    "active":Math.round(this.state.x/this.pageWidth)===index
                })}></div>)}
            </div>
        </div>
    }
}
