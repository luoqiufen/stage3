/*
 * @Author: your name
 * @Date: 2020-07-28 14:09:48
 * @LastEditTime: 2020-07-28 16:20:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photod:\web2004\stage3\day11\02_log.js
 */ 

// 使用mongoose简单实现员工信息管功能
var express = require('express');
// 获取封装的User模型(model)
var User = require('./02_user.js');
var fs = require('fs');
var app = express();

var pos = {
    'web开发':1,
    '后端开发':2,
    'UI设计':3
}

app.listen(4000);

app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    // 获数据库中的员工信息
    User.find({},'id name position',function(err,docs){
        if(err){
            console.log(err);
            res.render('show.ejs',{state:1,errMsg:'获取数据失败'})
            return;
        }
        // console.log(docs);
        res.render('show.ejs',{state:0,docs:docs})
    })
    
})

app.post('/add',function(req,res){
    var body = req.body;
    var name = body.ename;
    var age = body.age;
    var position = body.position
    var hireDate = new Date();//日期
    var hobbies = [];//爱好
    var id = parseInt(fs.readFileSync('./id.txt'));//上一个id
    id++;
    fs.writeFileSync('./id.txt',id);
    // 创建对象
    var o = new User({
        id:id,
        name:name,
        age:age,
        position:pos[position],
        hireDate:hireDate,
        hobbies:hobbies
    });

    // 保存进数据库
    o.save(function(err,product){
        if(err){
            console.log(err);
        }
        // console.log(product);
        res.redirect('/');
    })
})