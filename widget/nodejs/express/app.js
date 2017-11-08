var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
var user = {
    username:'huangh',
    pwd :'123456'
}
app.get('/', function(req, res){
    //console.log(req.session);
    console.log('Cookies-username: ', req.cookies.username);
    console.log('Cookies-pwd: ', req.cookies.pwd);

     if ( req.cookies.username==user.username 
        && req.cookies.pwd==user.pwd) {
        res.send("Welcome " + req.cookies.username + "<br>" + "<a href='/logout'>logout</a>");
    } else {
        res.send("<a href='/login'> Login</a>" + "<br>" + "<a href='/signup'> Sign Up</a>");
    }
    app.locals.title = 'My App';
   
});


app.get('/login', function(req, res){
    
   
});


app.listen(5000);
console.log('http://127.0.0.1:5000/');