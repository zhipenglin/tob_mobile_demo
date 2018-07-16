## unlogin

描述：tob未登录引导页

创建人：admin

创建时间：2018年07月13日 10:51

仓库地址: 请填写git仓库地址

[gitlab](请填写gitlab网页地址)

-----------

### 参数描述

| 参数名 | 类型 | 是否必须 | 说明 | 默认值 |
| --- | --- | ---- | --- | --- |
| hypeHeader |   string  |   是   |   动画文件存放根目录  |   -  |
| ApplyPage | class / function | 是 | 申请页面组件 | - |

### 使用说明

1. 配置npm源到 npm.zhinanzhen.ai

2. 安装包

```
npm i --save-dev @tob-support/unlogin
```

3. 在对应位置添加
```js
class App extends Component {
  render() {
    return (
      <div className="App">
          <UnLogin hypeHeader={/*见参数说明*/} ApplyPage={/*见参数说明*/}/>
      </div>
    );
  }
}
```

4. 本组件自适应方案采用 flexible 请自行在运行处添加

5. [演示地址](https://zhipenglin.github.io/tob_mobile_demo)

-----------

### Blog:

- 2018年07月13日 10:51：**admin** 创建组件
