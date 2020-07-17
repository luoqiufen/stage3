/*
 * @Author: your name
 * @Date: 2020-07-16 17:26:42
 * @LastEditTime: 2020-07-17 09:58:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2-coded:\web2004\stage3\day03\test_02.js
 */ 

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.url == '/circle'){
        fs.readFile('./test_02a.html',function(err,data){
            if(err){
                res.end('read file error');
                return;
            }
            res.end(data); 
        });
        return;
    }
    if(req.url == '/square'){
        fs.readFile('./test_02.html',function(err,data){
            if(err){
                res.end('read file error');
                return;
            }
            res.end(data);
        });
        return;
    }
    res.setHeader('content-type','text/html;charset=utf-8');
    res.end('地址错误');
})

server.listen(4000);

 
