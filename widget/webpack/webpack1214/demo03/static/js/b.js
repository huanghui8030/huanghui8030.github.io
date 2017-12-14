
var Common = require('./common.js');

var Styele = require('../css/styles/atest.css');

b();

function b(){
    console.log('执行b方法！');

    Common.commonTest2();

    var rootB = document.getElementById('root');
    rootB.className = Styele.div1;
    rootB.innerHTML = "哈哈哈test";

}