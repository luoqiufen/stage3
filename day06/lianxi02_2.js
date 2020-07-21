/*
 * @Author: your name
 * @Date: 2020-07-21 19:07:50
 * @LastEditTime: 2020-07-21 20:08:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day06\lianxi02_2.js
 */ 

const fd = require('formidable');
const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
    if (req.url == '/tijiao' && req.method.toLowerCase() == 'post') {
        // 获取表单对象
        const form = fd({ multiples: true });
        // 设置上传文件临时保存的路径
        form.uploadDir = './uploads'
 
        form.parse(req, (err, fields, files) => {
            // console.log(files);
            console.log(files.pic1.path);
            console.log(fields);
            // res.end('over!');
            // 修改上传文件的名称
            var oldName = files.pic1.path;
            var newName = files.pic1.name;// xxx.jpg
            newName = './uploads/'+newName;
            // 改名
            fs.rename(oldName,newName,function(err){
                console.log(err);
                res.end('rename over');
            })

        })
        
    }

    fs.readFile('./lianxi02.html', function (err, data) {
        if (err) {
            res.end('read file error');
            return;
        }
        res.end(data);
    })
}).listen(4000)

/* var express = require('express');
var app = express();

app.listen(4000);

// 设置视图模板引擎
app.set('view engine','ejs');

// 设置根目录
app.use(express.static('./uploads'));

// 处理 / 请求
app.get('/pic',function(req,res){
    // 获取uploads中的所有图片
    var pics = fs.readdirSync('./uploads');
    // 将pics传递给视图模板解析
    res.render('lianxi02',{pics:pics});

}) */