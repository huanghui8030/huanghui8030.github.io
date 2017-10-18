---
layout: post
title:  "复制文件插件ZeroClipboard用法-原生js插件"
date:   2017-10-18 10:12:19 +0800
categories: js
sort: 0202
---



原生的复制方法，只兼容FF和IE，其他浏览器不可使用。

- 通过zeroClipboard该插件可兼容各浏览器。


- zeroClipboard-github：https://github.com/zeroclipboard/ZeroClipboard

## 参数

- data-clipboard-text，需要显示的文本
- data-clipboard-target，需要显示内容的dom元素ID



## 具体用法

- 具体demo，点击复制按钮，复制内容data-content里面的内容：

  ```javascript
  <!DOCTYPE html>
  <html>
  <head>
      <title>ZeroClipboard复制文件插件</title>
      <script src="js/ZeroClipboard.min.js"></script>
  </head>
  <body>
  	<input type='button' id="copy-button" value='复制' data-content='复制的内容'>
      <script>
          var client = new ZeroClipboard( document.getElementById("copy-button") );
          client.on( "ready", function( readyEvent ) {
            client.on( "aftercopy", function( event ) {
               //event.target.style.display = "none";
                var content = client.target.getAttribute('data-content');
                alert("Copied text to clipboard: " + content );
            } );
          } );    
      </script>
  </body>
  </html>
  ```

  > 注意：页面不能直接方法，需要启动服务器才行。

- ​



- 具体[demo](/widget/javascript/ZeroClipboard/index.html)