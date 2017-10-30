var mysql = require('mysql');  
  
//创建连接  
var client = mysql.createConnection({  
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database:'mysql',
    port: 3306 
});  

var id = '1';
client.connect();
client.query(  
    'SELECT * FROM monitor_page_list where id =?', 
    [id], 
    function selectCb(err, results, fields) {  
        if (err) {  
            throw err;  
        }  
        if(results){
            for(var i = 0; i < results.length; i++){
                console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].url);
            }
        }    
        client.end();  
    }  
); 