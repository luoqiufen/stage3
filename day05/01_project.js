/*
 * @Author: your name
 * @Date: 2020-07-20 09:22:46
 * @LastEditTime: 2020-07-20 10:21:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\01_project.js
 */ 

// 创建服务并启动监听
// 当访问时,返回index.html页面的内容 
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    // 获取每一个请求地址
    var url = req.url;

    if(url == '/favicon.ico'){
        return;
    }
    
    if(url == '/'){
        url = '/index.html';
    }
    fs.readFile('./project'+url,function(err,data){
        if(err){
            console.log(err);
            res.end('Error!');
            return;
        }
        res.end(data);
    })

}).listen(4000)