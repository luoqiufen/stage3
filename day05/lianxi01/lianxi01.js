/*
 * @Author: your name
 * @Date: 2020-07-20 14:27:24
 * @LastEditTime: 2020-07-20 14:57:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\lianxi01\lianxi01.js
 */

var http = require('http');

var router = require('./router.js');

http.createServer(function (req, res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    if (req.url == '/') {
        router.showIndex(req,res);
        return;
    }
    if (req.url == '/info') {
        router.showInfo(req,res);
        return;
    }
    router.showErr(req,res);
    
}).listen(4000)

