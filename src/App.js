import React, { Component } from 'react';
import './App.css';
import UnLogin from '@tob-support/unlogin'

const ApplyPage=({onSubmit})=><div style={{
    fontSize:'0.373333rem'
}}>
    该组件由TOB实现，传给我 参数为ApplyPage，我会提供一个onSubmit参数，在提交成功后执行一下
    例如点击<button onClick={onSubmit}>这个按钮</button>
</div>


class App extends Component {
  render() {
    return (
      <div className="App">
          <UnLogin hypeHeader={`${process.env.PUBLIC_URL}/hype-lib`} ApplyPage={ApplyPage}/>
      </div>
    );
  }
}

export default App;
