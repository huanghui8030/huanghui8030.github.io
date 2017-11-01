---
layout: post
title:  "复制文件插件clipboard用法-不依赖flash"
date:   2017-10-18 11:12:19 +0800
categories: js
sort: 0202
---



原生的复制方法，不一依赖于flash和jquery，原生js插件

- 官网：https://clipboardjs.com/


- github：https://github.com/zenorocha/clipboard.js
- 兼容性：IE9+

## 参数

- data-clipboard-text，需要复制的文本
- data-clipboard-target，需要显示内容的dom元素ID



## 具体用法

- 具体demo，点击复制按钮，复制内容data-content里面的内容：

  ```javascript
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>复制文件clipboard插件用法</title>

  </head>
  <body>
     <input type="button" value="复制按钮" class="btn" data-clipboard-text="复制的内容">
      <script src="js/clipboard.min.js"></script>
      <script>
          var clipboard = new Clipboard('.btn');
          clipboard.on('success', function(e) {
              console.info('Action:', e.action);
              console.info('Text:', e.text);
              console.info('Trigger:', e.trigger);

              e.clearSelection();
              alert('复制成功');
          });
      </script>
  </body>
  </html>
  ```

  ​


- 具体[demo](/widget/javascript/clipboard/index.html)