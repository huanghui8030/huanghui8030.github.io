var Common = require('./common.js');
//require('../css/styles/atest.css');

//import '../css/styles/atest.css';//使用require导入css文件

a();

function a(){
    alert('我是app.js13312323222222');
    //Styele;
    console.log('执行a方法');

    Common.commonTest1();


    var a = document.getElementById('root');
    a.className = 'div2';
    a.innerHTML = "我是aaaa";
}


