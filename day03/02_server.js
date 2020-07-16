/*
 * @Author: your name
 * @Date: 2020-07-16 11:45:23
 * @LastEditTime: 2020-07-16 11:54:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2-coded:\web2004\stage3\day03\02_server.js
 */ 


// 1.引入模块
 var http = require('http');

// 2.创建服务
var server = http.createServer(function(req,res){
    // 4.返回响应给浏览器,参数就是返回的数据
    res.end('hello Node!');
});

// 3.开启监听
server.listen(4000);
