/*
 * @Author: your name
 * @Date: 2020-07-22 10:42:21
 * @LastEditTime: 2020-07-22 10:43:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day07\t_express_router.js
 */ 

var express = require('express');

// 引入student路由模块
var teacher = require('./route/teacher.js');

var app = express();

app.listen(4000);

// 处理所有以/student开头的请求
app.use('/teacher',teacher);