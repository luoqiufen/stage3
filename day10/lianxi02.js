/*
 * @Author: your name
 * @Date: 2020-07-27 18:54:22
 * @LastEditTime: 2020-07-27 20:25:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photod:\web2004\stage3\day10\lianxi02.js
 */ 

var express = require('express');
var app = express();

app.listen(4000);

app.use(express.static('./public'));

app.set('view engine','ejs');

// 跳转到登录页面
app.get('/',function(req,res){
    res.render('login');
}) 

