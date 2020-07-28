/*
 * @Author: your name
 * @Date: 2020-07-27 11:48:20
 * @LastEditTime: 2020-07-28 16:46:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photod:\web2004\stage3\day10\lianxi01.js
 */

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var app = express();

app.listen(4000);

// 设置请求参数的解析方式
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

var url = 'mongodb://localhost:27017';
var opt = { useUnifiedTopology: true };

app.get('/', function (req, res) {
    // 连接数据库
    MongoClient.connect(url, opt, function (err, client) {
        if (err) {//连接失败
            console.log(err);
            res.send('<h2>网络错误!</h2>');
            return;
        }
        //连接成功;
        // 获取集合对象
        var db = client.db('web');
        var col = db.collection('pro');

        // 获取所有数据
        col.find({}).sort({pid:1}).toArray(function (err, docs) {
            if (err) {//获取数据失败
                console.log(err);
                res.send('获取数据失败');
                client.close();
                return;
            }
            // 获取数据成功,将其渲染到视图模板上
            res.render('show', { pros: docs })
            client.close();
        })


    })

})

// get的 /add请求,跳转到添加数据的页面
app.get('/add', function (req, res) {
    res.render('add');
})
// post的 /add请求，接收页面传递的数据，将其保存进数据库
app.post('/add', function (req, res) {
    // 获取请求参数
    var body = req.body;
    var data = {};
    data.pid = parseInt(body.pid);
    data.pname = body.pname;
    data.price = parseInt(body.price);
    data.count = parseInt(body.count);
    // 连接数据库
    MongoClient.connect(url, opt, function (err, client) {
        if (err) {
            console.log(err);
            res.send('网络出错,一会再试');
            return;
        }
        // 连接成功
        var col = client.db('web').collection('pro');
        // 添加数据
        col.insertOne(data, function (err, result) {
            if (err) {//添加失败
                res.send('进货失败,稍后再试');
                client.close()
                return;
            }
            // 添加成功
            if (result.result.n > 0) {
                // 添加成功,跳转回首页
                res.redirect('/');
            } else {
                // 数据没有添加成功
                res.send('添加失败');
            }
            client.close();
        })
    })
})

// get的 /update请求，跳转到修改的页面
app.get('/update',function(req,res){
    // 获取参数
    var id = req.query.id;
    // 将字符串的id转换成ObjectId类型
    id = ObjectId(id);
    MongoClient.connect(url,opt,function(err,client){
        if (err) {
            console.log(err);
            res.send('网络出错,一会再试');
            return;
        }
        // 连接成功,开始查询对应的数据
        var col = client.db('web').collection('pro');
        col.find({_id:id}).toArray(function(err,docs){
            if(err){
                console.log(err);
                res.send('服务器出错');
                client.close();
                return;
            }
            // 查询数据成功
            if(docs.length == 0){
                // 没有数据
                res,send('查无此数据');
            }else{
                // 查到了数据
                res.render('update',{pro:docs[0]});
            }
        })
    })
});

// post的 /update 请求,更新数据
app.post('/update',function(req,res){
    var body = req.body;
    var data = {};
    data.price = parseInt(body.price);
    data.count = parseInt(body.count);
    // 获取_id的值,并将其转换为ObjectId类型
    var id = ObjectId(body.id);
    var filter = {_id:id};//修改的条件
    MongoClient.connect(url,opt,function(err,client){
        if (err) {
            console.log(err);
            res.send('网络出错,一会再试');
            return;
        }
        // 连接成功,获取集合对象
        var col = client.db('web').collection('pro');
        // 修改数据
        col.updateOne(filter,{$set:data},function(err,result){
            if(err){
                console.log(err);
                res.send('修改失败');
                client.close();
                return;
            }
            if(result.result.nModified>0){
                res.redirect('/');
            }else{
                res.send('数据未发生变化');
            }
            client.close();
            
        })
    })
})

// /delete/:id请求,删除数据
app.get('/delete/:id',function(req,res){
    var id = req.params.id;//String
    id = ObjectId(id);//ObjectedId
    var filter = {_id:id};//删除条件
    // 连接数据库删除数据
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            console.log(err);
            res.send('网络故障,稍后再试!');
            return;
        }
        // 连接成功,获取集合对象
        var col = client.db('web').collection('pro');
        // 删除数据
        col.deleteOne(filter,function(err,result){
            if(err){
                console.log(err);
                res.send('删除失败');
                client.close();
                return;
            }
            res.redirect('/')
            client.close();
        })
    })
})




