/*
 * @Author: your name
 * @Date: 2020-07-22 09:47:51
 * @LastEditTime: 2020-07-22 10:07:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day07\express_router.js
 */

var express = require('express');

// 引入student路由模块
var student = require('./route/student.js');

var app = express();

app.listen(4000);

// 处理所有以/student开头的请求
app.use('/student',student);