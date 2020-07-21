/*
 * @Author: your name
 * @Date: 2020-07-21 17:46:42
 * @LastEditTime: 2020-07-21 18:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day06\lianxi02.js
 */ 

//  获取upload是文件夹中的所有图片,将其展示在页面中

var express = require('express');
var fs = require('fs');
var app = express();

app.listen(4000);

// 设置视图模板引擎
app.set('view engine','ejs');

// 设置根目录
app.use(express.static('./uploads'));

// 处理 / 请求
app.get('/',function(req,res){
    // 获取uploads中的所有图片
    var pics = fs.readdirSync('./uploads');
    // 将pics传递给视图模板解析
    res.render('lianxi02',{pics:pics});

})