/*
 * @Author: your name
 * @Date: 2020-07-27 18:54:22
 * @LastEditTime: 2020-07-28 10:31:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photod:\web2004\stage3\day10\lianxi02.js
 */ 

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.listen(4000);

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');

var url = 'mongodb://localhost:27017';
var opt = { useUnifiedTopology: true };

// 跳转到登录页面
app.get('/login',function(req,res){
    res.render('login');
}) 
// 处理登录请求
app.post("/login",function(req,res){
    var param = req.body;
    MongoClient.connect(url,opt,function(err,client){

    })
})




app.get('/register',function(req,res){
    res.render('register');
}) 

// 处理注册请求
app.get('/register',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    // 对username和password的合法性进行判断
    // 判断数据库中是否已经存在该用户名
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            console.log(err);
            res.send('网络波动,请稍后再试');
            return;
        }
        var col = client.db('web').collection('users');
        // 判断username是否存在
        col.find({username:username}).toArray(function(err,docs){
            if(err){
                console.log(err);
                res.send('网络异常,请稍后再试');
                client.close();
                return;
            }
            // docs如果不是空数组,则说明查到了数据
            if(docs.length>0){
                res.send('用户名已存在');
                client.close();
                return;
            }
            // 空数组,没有查到数据,保存数据
            var data = {
                username:username,
                password:password
            }
            col.insertOne(data,function(err,result){
                if(err){
                    console.log(err)
                    res.send('注册失败');
                    client.close();
                    return;
                }
                if(result.insertedCount==0){
                    res.send('注册失败');
                }else{
                    res.send('注册成功');
                }
                client.close();
            })
        })
    })
})



