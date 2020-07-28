/*
 * @Author: your name
 * @Date: 2020-07-28 10:49:20
 * @LastEditTime: 2020-07-28 14:34:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photod:\web2004\stage3\day11\01)mongoose.js
 */

// 引入mongoose
var mongoose = require('mongoose');

// mongoose对数据库的操作全部都是基于Schema的
// 创建user对应的Schema
// 参数为数据的结构
// key表示存储数据的属性
// value表示数据的数据类型
var userSchema = new mongoose.Schema({
    uname: String,
    age: Number,
    isMarried: Boolean,
    birth: Date
})
// 基于Schema创建对应的模型
// 第一个参数: 其对应的复数形式为集合名称
// 第二个参数: Schema
var User = mongoose.model('user', userSchema);

// 连接数据库
// 协议://ip:端口/数据库名称

var url = 'mongodb://localhost:27017/web';
var opt = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(url, opt)

// 连接成功后CRUD
// 4.查询数据
/* User.find({查询的条件},function(err,docs){

}) */


// 3.修改数据
/* User.updateOne({修改的条件},$set:{修改的数据},fu(err,raw){

}) */


// 2.删除数据
/* User.deleteOne({},function(err){
    console.log(err);
}) */


// 1.增加数据
/* var u = {
    uname: '虹猫',
    age: 15,
    isMarried: false,
    birth: new Date(),
    test: '测试'//不会保存进数据库
}
var o = new User(u);
o.save(function (err, doc) {
    console.log(err)
    console.log(doc)
}) */

/* User.insertMany([u],function(err,res){
    console.log(err);
    console.log(res);
}) */