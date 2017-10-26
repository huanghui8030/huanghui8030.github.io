/**
 * nodejs 实现数据的增删查改
 * huangh  20171025
 */
var httpserver = require("http");
var qs = require("querystring");
var url = require("url");
var fs = require("fs");

var FileJson = "file/file.json";//写入内容的文件

httpserver.createServer(onRequest).listen(3000);
console.log('-------服务器已启动，请在浏览器中输入：http://127.0.0.1:3000/');

function onRequest(request,response){
    var pathname = url.parse(request.url).pathname;
    if(pathname=="/" || pathname=="/list.html"){//访问列表页面
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("list.html","utf-8",function(e,data){
            response.write(data);
            response.end();
        });
    }else if(pathname=='/file/file.json'){//访问json文件
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile(FileJson,"utf-8",function(e,data){
            response.write(data);
            response.end();
        });

    }else if(pathname=='/add' || pathname=='/add.html'){//访问列表页面
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("add.html","utf-8",function(e,data){
            response.write(data);
            response.end();
        });
    }else if(pathname=="/addpage"){//添加页面功能
        var urlstr="";
        request.addListener("data",function(postdata){
            urlstr+=postdata;    //接收到的表单数据字符串，这里可以用两种方法将UTF-8编码转换为中文
            var jsondata = qs.parse(urlstr);        //转换成json对象
            
            jsondata.updatetime = new Date().Format("yyyy-MM-dd hh:mm:ss");//更新时间

            var dataArr = fs.readFileSync(FileJson,'utf-8') ; 
            
            var fileDate=[];
                size = 0;
            if(dataArr !=''){
                fileDate = eval("("+dataArr+")");  //string 类型转为 数组类型
                size = fileDate.length ;
            }

            console.log(fileDate);
            console.log("size:"+size);

            jsondata.id = new Date().getTime(); //序号，唯一标识

            
            fileDate[size] = jsondata;
            urlstr = JSON.stringify(fileDate);

            fs.writeFile(FileJson,urlstr,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
                 if(err){
                     console.log("文件内容添加写入失败！")
                 }else{
                     console.log("文件内容添加写入成功！");
                 }
            }) 
        });
        request.addListener("end",function(){
            console.log('添加成功！');
            response.writeHead(301,{ 'Location':'/' }); //重定向
            response.end();
        });
    }else if(pathname=='/updatepage'){//保存修改内容
        console.log('----进入修改保存页面----');
        var urlstr = '';
        request.addListener("data",function(postdata){
            console.log(1);
            urlstr+=postdata;    //接收到的表单数据字符串，这里可以用两种方法将UTF-8编码转换为中文
            var jsondata = qs.parse(urlstr);        //转换成json对象
            var id = jsondata.id;
            console.log('id-----'+id);
            jsondata.updatetime = new Date().Format("yyyy-MM-dd hh:mm:ss");//更新时间
            console.log("修改的数据-------"+jsondata.name);
            var dataArr = fs.readFileSync(FileJson,'utf-8') ; //去读文件
            
            var fileDate=[];
                size = 0;
            if(dataArr !=''){
                fileDate = eval("("+dataArr+")");  //string 类型转为 数组类型
                size = fileDate.length ;
            }
            console.log("总共的数据条数:"+size);

            //遍历已有数据，取出需要修改的数据，进行替换
            for (var i = 0; i < size; i++) {
                if(fileDate[i].id==id){
                    fileDate[i] = jsondata;
                    break;
                }
            }
            console.log("修改后的新数据："+fileDate[i]);
            
            urlstr = JSON.stringify(fileDate);

            fs.writeFile(FileJson,urlstr,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
                 if(err){
                     console.log("文件内容修改写入失败！")
                 }else{
                     console.log("文件内容修改写入成功！");
                 }
            }) 
        });
        request.addListener("end",function(){
            response.writeHead(301,{ 'Location':'/' }); //重定向
            response.end();
        });
    }else if(pathname=='/update'){//修改页面
        var urlstr = '';
        request.addListener("data",function(postdata){
            urlstr+=postdata;    //接收到的表单数据字符串，这里可以用两种方法将UTF-8编码转换为中文
            var jsondata = qs.parse(urlstr);        //转换成json对象
            var id = jsondata.id;//前台传过来的参数，只有一个id
            console.log("进入修改页面-------"+jsondata.id);
            var dataArr = fs.readFileSync(FileJson,'utf-8') ; //去读文件
            
            var fileDate=[];
                size = 0;
            if(dataArr !=''){
                fileDate = eval("("+dataArr+")");  //string 类型转为 数组类型
                size = fileDate.length ;
            }
           // console.log(fileDate[0].id);
           // console.log("总共的数据条数："+size);

            //遍历已有数据，取出需要修改的数据，进行替换
            for (var i = 0; i < size; i++) {
                if(fileDate[i].id==id){
                    urlstr = fileDate[i];
                    break;
                }
            }
           // console.log(urlstr);
        });
        request.addListener("end",function(){
            response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
            response.write(JSON.stringify(urlstr));
            console.log('跳转到修改页面，数据传送成功！');
            response.end();
        });
    }else if(pathname=='/deleteonly'){//单个删除
        var urlstr = '';
        request.addListener("data",function(postdata){
            urlstr+=postdata;    //接收到的表单数据字符串，这里可以用两种方法将UTF-8编码转换为中文
            var jsondata = qs.parse(urlstr);        //转换成json对象
            var id = jsondata.id;
            jsondata.updatetime = new Date().Format("yyyy-MM-dd hh:mm:ss");//更新时间

            var dataArr = fs.readFileSync(FileJson,'utf-8') ; 
            
            var fileDate=[];
                size = 0;
            if(dataArr !=''){
                fileDate = eval("("+dataArr+")");  //string 类型转为 数组类型
                size = fileDate.length ;
            }
            console.log(fileDate[0].id);
            console.log("size:"+size);

            //遍历已有数据，取出需要修改的数据，进行单个删除。记住需要break，否则会报错
            for (var i = 0; i < size; i++) {
                if(fileDate[i].id==id){
                    fileDate.splice(i,1);
                    break;
                }
            }
            console.log(fileDate.length);
            
            urlstr = JSON.stringify(fileDate);

            fs.writeFile(FileJson,urlstr,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
                 if(err){
                     console.log("文件内容删除写入失败！")
                 }else{
                     console.log("文件内容删除写入成功！");
                 }
            }) 
        });
        request.addListener("end",function(){
            response.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
            response.write('单个删除成功！');
            response.end();
        });
    }else{
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("error");
        response.end();
    }
}

//日期格式化
Date.prototype.Format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}



