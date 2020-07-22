/*
 * @Author: your name
 * @Date: 2020-07-22 14:40:53
 * @LastEditTime: 2020-07-22 14:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day07\02_post.js
 */

var express = require('express');
var app = express();

app.listen(4000);

app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.render('form.ejs');
})

app.post('/tijiao', function (req, res) {
    console.log(req.body);
    res.end('over');
})