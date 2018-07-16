import React from 'react'

export default ({name,desc,img})=>{
    return <div className="honor-item">
        <div className="top">
            <div className="name">{name}</div>
            <div className="desc">{desc}</div>
        </div>
        <div className="img"><img src={img} alt={desc}/></div>
    </div>
}
