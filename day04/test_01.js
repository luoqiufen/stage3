/*
 * @Author: your name
 * @Date: 2020-07-17 14:52:48
 * @LastEditTime: 2020-07-17 15:37:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day04\test_01.js
 */
var http = require('http');
var url = require('url')
var fs = require('fs')

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var path = urlObj.pathname;
    
    if(path=='/regist'){
        var username = urlObj.query.username;
        var password = urlObj.query.password;
        return;
    }

    fs.readFile('./test_01.html',function(err,data){
        if(err){
            res.end("读取文件失败");
            return;
        }
        res.end(data);
    })

    res.setHeader('content-type', 'text/html;charset=utf-8');
    var path = 'user.json';
    var user = '[{"username":"'+username+'","password":"'+password+'"}]';

    // var ops = { flag: 'a' }

    fs.writeFile(path, user,{flag:"a"}, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('写入成功');
    })


}).listen(4000);