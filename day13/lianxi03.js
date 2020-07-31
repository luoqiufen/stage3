// 使用session实现登录功能
var express = require('express');
var session = require('express-session');

var app = express();

app.listen(4000);

app.use(session({
    secret: 'abc',
    resave:false,
    saveUninitialized:true
}));

app.get('/',function(req,res){
    var username = req.session.username;
    // 获取session中有没有登录信息
    if(!username){
        // session没有找到usename
        res.send('请先登录');
        return;
    }
    // 找到数据,说明登录了
    res.send('欢迎你,'+usename);
})

app.get('login',function(req,res){
    var username = req.query.username;
    if(username!='apple'){
        res.send('登录失败');
        return;
    }
    // 登录成功
    session.username = username;
    res.send('登录成功');
})
