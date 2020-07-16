/*
 * @Author: your name
 * @Date: 2020-07-16 15:16:48
 * @LastEditTime: 2020-07-16 15:29:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2-coded:\web2004\stage3\day03\04_res.js
 */ 
var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return;
    }
    // end方法的作用： 结束请求，返回响应
    // res.end('over');
    // res.end('123'); // end方法只能执行一次

    // 设置响应头,中文编码
    res.setHeader('Content-Type','text/html;charset=utf-8');
    // res.write方法: 返回数据,但是不结束请求
    res.write('<h1 style="color:red;">第一次返回数据</h1>');
    res.write('<h2>第二次返回数据</h2>');

    // res.end();
    res.end('<h3>123</h3>');
});

server.listen(4000);