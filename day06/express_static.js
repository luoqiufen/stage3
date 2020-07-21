/*
 * @Author: your name
 * @Date: 2020-07-21 16:54:54
 * @LastEditTime: 2020-07-21 17:58:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day06\express_static.js
 */ 

// 静态文件伺服功能
var express = require('express');
var app = express();

app.listen(4000);

// 将当前路径下的public文件夹设置为根目录
app.use(express.static('./public'))

app.get('/',function(req,res){
    // 1.static.ejs中没有坑需要数据来填充,所有不需要传递数据过去
    // 2.因为没有设置为默认的视图模板引擎,所以后缀名必须添加
    res.render('static.ejs');
})