/*
 * @Author: your name
 * @Date: 2020-07-17 14:52:48
 * @LastEditTime: 2020-07-18 11:02:21
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

    if (path == '/regist') {
        var username = urlObj.query.username;
        var password = urlObj.query.password;

        var path = 'user.json';
        var user = '[{"username":"' + username + '","password":"' + password + '"}]';

        fs.writeFile(path, user, { flag: "w" }, function (err) {
            if (err) {
                res.end(err);
                return;
            }
            res.end('写入成功');
            return;
        })
    }

    fs.readFile('./test_01.html', function (err, data) {
        if (err) {
            res.end("读取文件失败");
            return;
        }
        res.end(data);
    })

    res.setHeader('content-type', 'text/html;charset=utf-8');



}).listen(4000);