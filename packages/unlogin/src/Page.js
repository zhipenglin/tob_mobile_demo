import React, {PureComponent} from 'react'

export default class extends PureComponent {
    state = {
        moved: false,
        y: 0
    };
    handlerStart = (e) => {
        this.startY = e.touches[0].clientY, this.startX = e.touches[0].clientX;
        this.prevY = 0;
        this.deltaY = this.deltaX = 0;
        this.setState({moved: true, y: 0});
    };
    handlerMove = (e) => {
        const {index} = this.props;
        this.deltaY = this.startY - e.touches[0].clientY, this.deltaX = this.startX - e.touches[0].clientX;
        const newY = this.deltaY;
        if ((index + newY / this.pageHeight) < 0 || (index + newY / this.pageHeight) > this.pageSize - 1 || Math.abs(this.deltaY) < this.prevY || Math.abs(this.deltaX) > Math.abs(this.deltaY)) {
            this.deltaY = 0;
            this.setState({y: 0, moved: false});
            return;
        }
        this.setState({y: newY});
        this.prevY = Math.abs(this.deltaY);
    };
    handlerEnd = () => {
        const {index, onChange} = this.props;
        this.setState({moved: false, y: 0});
        const newY = this.pageHeight * (this.deltaY > 0 ? 1 : -1);
        if (Math.abs(this.deltaY) >= 50 && (index + newY / this.pageHeight) >= 0 && (index + newY / this.pageHeight) <= this.pageSize - 1) {
            onChange(Math.round(newY / this.pageHeight) + index);
        }
    };

    constructor(props) {
        super(props);
        this.pageHeight = document.documentElement.clientHeight;
    }

    componentDidMount() {
        const {children} = this.props;
        this.pageSize = React.Children.count(children);
        this.height = this.pageHeight * this.pageSize;


    }

    render() {
        const {className, index, children} = this.props;
        return (
            <div className={className}
                 style={{
                     height: `${this.pageHeight}px`
                 }}
                 onTouchStart={this.handlerStart}
                 onTouchMove={this.handlerMove}
                 onTouchEnd={this.handlerEnd}
                 onTouchCancel={this.handlerEnd}
            >
                <div className="page-inner" style={{
                    transform: `translateY(${-(this.state.moved ? this.state.y + index * this.pageHeight : index * this.pageHeight)}px)`,
                    transition: this.state.moved ? '' : `transform 400ms`
                }}>
                    {children}
                </div>
            </div>
        )
    }
}
