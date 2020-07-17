/*
 * @Author: your name
 * @Date: 2020-07-16 19:31:40
 * @LastEditTime: 2020-07-17 10:39:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2-coded:\web2004\stage3\day03\test_04.js
 */ 
var http = require('http');

var url = require('url')
var fs = require('fs')

var server = http.createServer(function(req,res){
    var info = ['apple','123456'];//用户名和密码

    // 将字符串的地址转换为对象
    var urlStr = req.url;
    var urlObj = url.parse(urlStr,true);

    var query = urlObj.query;
    var path = urlObj.pathname;
    var username = query.username;
    var password = query.password;

    res.setHeader('content-type','text/html;charset=utf-8');
    if(path=="/login"){
        if(username != info[0]){
            res.write('用户名错误');
            return;
        }
        if(password != info[1]){
            res.write('密码错误');
            return;
        }
        res.end('欢迎您'+username);
    }
    fs.readFile('./test_04.html',function(err,data){
        if(err){
            res.end("sdhhdsjhdhjd");
            return;
        }
        res.end(data);
    })  

})

server.listen(4000);