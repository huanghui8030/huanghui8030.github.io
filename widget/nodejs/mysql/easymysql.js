var Client = require('easymysql');

var mysql = Client.create({
  'maxconnections' : 10
});

mysql.addserver({
  'host' : '127.0.0.1',
  'user' : 'root',
  'password' : 'root',
  //'database':'mysql',
  'port': 3306 
});


mysql.on('busy', function (queuesize, maxconnections, which) {
  // XXX: write log and monitor it
});

mysql.query('SHOW DATABASES', function (error, res) {
  console.log(res);
});

// bind params
mysql.query({
  sql: 'select * from monitor_page_list ',
 // params: {user: 'xxoo'}
}, function (err, rows) {
  console.log(rows);
});
