---
layout: post
title:  "React的拖拽组件react-draggable"
date:   2018-07-08 15:12:19 +0800
categories: react
sort: 1302
---

react-draggable主要是实现原生的拖拽功能的，进行一个简单的总结。

- npm地址：https://www.npmjs.com/package/react-draggable
- github地址：https://www.npmjs.com/package/react-draggable



## 具体用法

- 终端执行：`npm i react-draggable`

- 页面引入：

  ```jsx
  import Draggable from 'react-draggable';//拖拽
  ```

- 在需要拖拽的dom原生外面，加上Draggable。例如

  ```jsx
  <Draggable 
      defaultPosition={{x: 0, y: 0}}
      position={{x: 0, y: 0}}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop} key={index}>
      <div className={cName} data-id={index} data-key={value.key} data-status={name} 
      onDoubleClick={this.modifyStatus} 
      > {value.name}{myselfTs}</div>
  </Draggable>
  ```

  - defaultPosition：默认的位置，一般为0，0。
  - position：拖拽元素的位置，一般在拖拽后确定元素的位置时会用到。
  - onStart：开始方法，一般用户判断需要拖拽的原生是否正确。
  - onDrag：拖拽中的方法，一般可能用不上。
  - onStop：拖拽结束的方法，一般用于处理拖拽原生拖拽后的位置，以及一些业务处理等。

- 事件定义：

  ```jsx
   constructor(props) {
      super(props);
      this.handleStart = this.handleStart.bind(this);//拖拽开始
      this.handleDrag = this.handleDrag.bind(this);//拖拽结束
      this.handleStop = this.handleStop.bind(this);//拖拽结束
   };
  ```

- 具体的实现：

  ```jsx
  handleStart(event,ui){};
  handleDrag(event,ui){};
  handleStop(event,ui){};
  ```

  - 3个方法中的参数相同

    - event：拖拽后的原生事件，event.target，拖拽停止的dom原生。最好是不要使用，经常拖拽后为拖拽原生本身，不能进行实际的判断。

    - ui：当前拖拽的原生的相关属性值。一般使用x、y、node：

      - x、y：当前移动的距离。
      - node：当前移动的dom原生。

      ```json
      {
          deltaX:0,
          deltaY:0,
          lastX:9
          lastY:31,
          node:div.move.move-show.react-draggable.react-draggable-dragging.react-draggable-dragged...
          x:9,
          y:31,
      }
      ```



> 总结于20180709周一