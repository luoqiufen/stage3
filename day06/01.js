/*
 * @Author: your name
 * @Date: 2020-07-21 10:10:10
 * @LastEditTime: 2020-07-21 11:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day06\01.js
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

        /* 
        form.parse() 解析请求对象,获取其中的数据
        err: 错误信息,解析出错
        fields: 解析得到的表单中的文本域的内容
        files: 解析得到的表单中上传的文件(文件默认保存在C盘)
        */
 
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

    fs.readFile('./01.html', function (err, data) {
        if (err) {
            res.end('read file error');
            return;
        }
        res.end(data);
    })
}).listen(4000)
