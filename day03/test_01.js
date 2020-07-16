/*
 * @Author: your name
 * @Date: 2020-07-16 16:17:19
 * @LastEditTime: 2020-07-16 20:06:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2-coded:\web2004\stage3\day03\test_01.js
 */ 
var http = require('http');

var server = http.createServer(function(req,res){
if(req.url=='/favicon.ico'){
    return ;
}

// http://localhost:4000/?username=fdh&psaaword=fgh 
var url = req.url;
var data = url.split('?')[1].split('&');
// ['username=fdh','password=fgh']

var username;
var password;
for(var i=0;i<data.length;i++){
    var arr = data[i].split('=');
    if('username'==arr[0]){
        username = arr[1];
    }
    if('password'==arr[0]){
        password = arr[1];
    }
}
res.setHeader('content-type','text/html;charset=utf-8');
res.end('用户名是:'+username+',密码是:'+password);
})

server.listen(4000);

