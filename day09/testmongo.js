/*
 * @Author: your name
 * @Date: 2020-07-24 17:10:33
 * @LastEditTime: 2020-07-27 10:27:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photod:\web2004\stage3\day09\testmongo.js
 */ 

//  使用nodejs连接数据库
 var MongoClient = require('mongodb').MongoClient;

//  连接地址
var url = 'mongodb://localhost:27017';

// 连接选项
var opt = {useUnifiedTopology:true}

// 开始连接
MongoClient.connect(url,opt,function(err,client){
    if(err){
        console.log(err);
        return;
    }
    console.log('连接成功');
    // 操作结束后，一定要关闭连接
    // client.close();

    // 获取数据库
    var db = client.db('web');
    // 获取集合
    var col = db.collection('emp');
    // 增加数据
    /* var doc1 = {
        name:'猪猪侠',
        age:8,
        likes:['吃饭','睡觉'],
        score:{html:'59',css:'60',js:61}
    };

    col.insertOne(doc1,function(err,docs){
        if(err){
            console.log(err);
            client.close();
            return;
        }
        console.log(docs);
        client.close();
    }) */

    // 删除数据 
    /* col.deleteOne({name:'赵六'},function(err,docs){
        if(err){
            console.log(err);
            client.close();
            return;
        }
        console.log(docs);
        client.close();
    }) */

    // 修改数据
    col.updateOne({ name : '张三' }, { $set: { age : 33 } }, function(err, result){
        if(err){
            console.log(err);
            client.close();
            return;
        }
        console.log(result);
        client.close();
    })

    // 查询集合中的所有数据
    /* col.find().toArray(function(err,docs){
        if(err){
            console.log(err);
            client.close();
            return;
        }
        console.log(docs);
        client.close();
    }) */
})