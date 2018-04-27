# jQuery-Validation插件用法总结

​	[jquery](https://jquery.com/)、[jquery-validation](http://plugins.jquery.com/validation/)、[jquery-validation for github](https://github.com/jzaefferer/jquery-validation)

## 1、基本验证方法

- required 必填，remote 远程校验
- minlength最小长度，maxlength最大长度，rangelength 长度
- min最小值，max最大值，range取值范围
- email 邮箱格式，url URL格式，date日期，dateISO ISO日期
- number 数字，digits 正整数， equalTo 与另一个元素值相等

## 2、rules（）方法

- rules()，获取表单元素的校验规则
- rules('add',rules)，向表单元素增加校验规则
- rules('remove',rules)，删除表单元素校验规则

## 3、Validator对象

- validate 方法返回Validator对象，Validator独享有很多方法可用：

  - Validator.form()， 验证表单是否有效，返回true/false
  - Validator.element(element) ，验证某个元素是否有效，返回true/false
  - Validator.restForm() ，把表单恢复到验证前原来的状态
  - Validator.showErrors(errors) ，针对某个元素显示特定的错误信息
  - Validator.numberOfInvalids()，返回无效的元素数量

- Validator对象有很多有用的静态方法，可直接使用：

  - jQuery.validator.addMethod(name,methor,[message])，增加自定义的验证方法
  - jQuery.validator.format( template , argument , argumentN …)，格式化字符串，用参数代理模板中的`{n}`
  - jQuery.validator.setDefaults( options )，修改插件默认设置
  - jQuery.validator.addClassRules( name , rules)，为某些包含名为name的class增加组合验证类型

- validate（）方法配置项

  - submitHandler ，通过验证后运行的函数，可以加上表单提交的方法

  - invalidHandler，无效表单提交后运行的函数

  - ignore，对某些元素不进行验证

  - rules，定义校验规则

  - messages，定义提示信息

  - groups ，对一组元素的验证，用一个错误提示，用errlrPlacement控制把出错信息放到哪里

  - errorClass，指定错误提示的css类名，可以自定义错误提示的样式

  - validClass，指定验证通过的css类名

  - errorElement，使用什么标签标记错误

  - wrapper，使用什么标签把上边的errorElement包起来

  - errorLabelContainer，把错误信息统一放到一个容器里面

  - errorContainer，显示或者隐藏验证信息，可以自动实现由错误信息出现时把容器属性变为显示，无错误时隐藏。

  - showError，可以显示总共有多少个未通过验证的元素

  - errorPlacement，自定义信息放到哪里

  - success，要验证的元素通过验证后的动作

  - hightlight，可以给未通过验证的元素加效果

  - unhightlight，去除未通过验证的元素的效果，一般和hightlight同时使用


## 4、选择器扩展

- :blank，选择所有值为空的元素
- :filled，选择所有值不为空的元素
- :unchecked，选择所有没有被选中的元素

## 5、自定义验证方法

- jQuery.validator.addMethor( name, methor [, message])
  - name：方法名称
  - method：function( value , element , params ) 方法逻辑
  - message：提示信息，可选
- additional-methods.js 包含了很多**扩展验证方法**

## 6、客户端校验安全

- 在数据被输入程序前必须对数据合法性的校验，非法输入问题是最常见得web应用程序安全漏洞
- 所有提交的表单数据都必须**验证两次**，即提交前在客服端验证，提交后在服务器端再次验证，保证数据的合法性
- **服务器端不要相信任何的客户端数据！**



> 黄卉 于 2016.07.20 整理，如有误请指正！