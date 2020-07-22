/*
 * @Author: your name
 * @Date: 2020-07-22 11:04:57
 * @LastEditTime: 2020-07-22 11:58:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day07\01_get_use.js
 */

var express = require('express');
var fs = require('fs');

var app = express();

app.listen(4000);

app.use(rootDir('./public'));

app.get('/', function (req, res) {
    res.render('test.ejs');
})


function rootDir(root){
    return function(req, res, next){
        // 如果请求地址不是 /
        if(req.url != '/'){
            var data = fs.readFileSync(root+req.url);
            if(req.url == '/style/index.css' ){
                res.setHeader('content-type','text/css')
            }
            res.send(data);
            return;
        }
        // 请求地址是 / ,把请求地址放行,让后续的中间件来处理这个请求
        next();
    }
}

