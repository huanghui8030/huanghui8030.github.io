var svn = require('svn-info');

svn('https://svn.chsi.com.cn/svn/repos/mis/trunk/webapp/src/main/webapp/monitor/manage/list.html', 'HEAD', function(err, info) {
  if(err) {
    throw err;
  }
  console.log(info.lastChangedAuthor);
  console.log(info.lastChangedDate)
  console.log(info);
});
