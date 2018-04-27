# json格式解析以及jsonp返回方法解析跨越问题

## json格式解析方法

- jQuery方法：

  ```
  $.getJSON('dataJson.json',function(data){
  	
  })
  ```


- 判断json是否为空：

  ```
  jQuery.isEmptyObject(data)；
  ```

- 判断json格式的长度

  ```
  var index = 0
  $.each(key,val){
    index +=1;
  };
  console.log("json长度："+index);
  ```



## jsonp返回方法jsonp，解决跨越问题

- 当后台访回的数据在另外一个域名上面时，需要通过jsonp格式来返回数据

- jsonp格式的方法

  ```
  $.ajax({ 
      type: "get",
      cache: false,
      async: true,
      crossDomain:true,
      url: url,  //url地址
      data: data,  //传递回去的参数data，可为空
      dataType: "jsonp",  
      jsonp: "callback", //回调函数的参数  
      jsonpCallback: "mycallback", //回调函数的名称，这个参数需要后台返回数据一样
      success: function(data){
        alert('成功');
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        alert('失败');
      }
    });
  ```

- 注意：返回参数必须是在`` mycallback``这个函数名里面，返回的`jsonp`格式的数据为：`mycallback(json格式)`，而不是`json`数据。需要和后台商量定义这个函数名。

  ​