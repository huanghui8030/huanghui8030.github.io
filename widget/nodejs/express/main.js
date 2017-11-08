var express = require("express");
//var app = express.createServer();  // 在新版本已经不兼容了，所以直接用下面那个
var app = express();  // 或者直接 var app= require("express")();
var port = 3000;
var ip = "127.0.0.1";
app.listen(port,ip);// ip 这个参数可不写，默认本地

app.get('/',function(req,res){ 
    res.send("Hello World\n");
});
app.get('/one',function(req,res){    // 或者“/one/
    res.send("one\n");
});
app.get('/user',function(req,res){   //或者 "/user/"
    res.send("user\n");
});
app.get('/user/:id',function(req,res){   //或者 "/user/"
    res.send("user: "+req.params.id);
});
console.log("start express server\n");