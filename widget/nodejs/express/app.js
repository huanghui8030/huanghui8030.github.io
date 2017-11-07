var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log(req.session);
     if (typeof(req.session)!='undefined' && req.session.username) {
        res.send("Welcome " + req.session.username + "<br>" + "<a href='/logout'>logout</a>");
    } else {
        res.send("<a href='/login'> Login</a>" + "<br>" + "<a href='/signup'> Sign Up</a>");
    }
    app.locals.title = 'My App';
    res.send('hello world');
});
app.get('/login', function(req, res){
   console.log(app.locals.title);
    res.send('hello world');
});



app.listen(3000);