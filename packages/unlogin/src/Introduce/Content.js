import React, {PureComponent} from 'react'
import Hype from '../Hype'

export default ({title, desc, info, name, running, hypeHeader}) => {
    return (
        <div className="content">
            <div className="top">
                <div className="title">{title}</div>
                <div className="desc">{desc} </div>
            </div>
            <div className="info">
                {info.map((text, i) => <div key={i} className="item">{text}</div>)}
            </div>
            <Hype className="animation" header={hypeHeader} name={name} running={running}/>
        </div>
    );
};
