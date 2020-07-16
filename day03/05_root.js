/*
 * @Author: your name
 * @Date: 2020-07-16 15:31:52
 * @LastEditTime: 2020-07-16 15:55:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2-coded:\web2004\stage3\day03\05_root.js
 */ 
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return;
    }

    // res.end('<h1>over</h1>');
    // 访问已经写好的页面,要借助于fs模块
    // 使用fs模块读取页面的内容,然后将读取到上午页面返回给浏览器
    fs.readFile('./root.html',function(err,data){
        if(err){
            // 读取出错
            res.end('read file error');
        }
        // 读取成功,返回data数据
        console.log(data);
        console.log(data.toString());
        res.end(data);
    })
    
})

server.listen(4000);