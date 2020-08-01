// 演示路由的参数选项
var express = require('express');
var router = require('./01_router_2.js');

var app = express();

app.listen(4000);

// 处理路由 /test/:XXX/???
app.use('/test/:name1',router);