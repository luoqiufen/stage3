/*
 * @Author: your name
 * @Date: 2020-07-28 14:12:47
 * @LastEditTime: 2020-07-29 11:34:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photod:\web2004\stage3\day11\02_user.js
 */ 

//  mongoose的简单封装
var mongoose = require('mongoose');
var config = require('./02_config.js');
var protocal = config.protocal;
var ip = config.ip;
var port = config.port;
var dbName = config.dbName;
var colName = config.colName;
// 创建User的Schema
var userSchema = new mongoose.Schema({
    id:{type:Number},
    name:String,
    age:Number,
    position:Number,
    hireDate:Date,
    hobbies:Array
},{
    collection:colName, //指定集合名称
    versionKey:false //不要__v
})

// 创建Model
var User = mongoose.model('emp',userSchema);

// 连接地址
// mongodb://127.0.0.1:27017/web
var url = protocal+'://'+ip+':'+port+'/'+dbName;
// 连接数据库
var opt={
    useUnifiedTopology:true,
    useNewUrlParser:true
}
mongoose.connect(url,opt);

// 暴露
module.exports = User;