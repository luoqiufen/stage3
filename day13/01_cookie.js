var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();

app.listen(4000);

app.use(cookieParser('abc'))

// 设置cookie
app.get('/',function (req,res) {
    res.cookie('cookie1','aaa');
    res.cookie('cookie2','bbbbb',{httpOnly:true});//无法使用脚本获取cookie
    res.cookie('cookie3','ccccc',{domain:'localhost'});//只能通过localhost访问
    res.cookie('cookie4','dddd',{expires:new Date(Date.now()+5000)});
    res.cookie('cookie5','eeeeee',{maxAge:5000000});

    res.cookie('cookie6','path',{path:'/patha'});//只能在指定路径下访问

    res.cookie('cookie7','signed',{signed:true});


    res.end();
})

app.get('/getcookie',function (req,res) {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.end;
})

app.get('/patha',function(req,res) {
    res.end()
})
app.get('/pathb',function(req,res) {
    res.end()
})