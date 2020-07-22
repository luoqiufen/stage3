/*
 * @Author: your name
 * @Date: 2020-07-22 09:48:04
 * @LastEditTime: 2020-07-22 10:39:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day07\route\student.js
 */ 

//  创建student路由
var express = require('express');
// 创建路由对象
var router = express.Router();

// 使用路由对象,处理具体请求
//  /student
router.get('/',function(req,res){
    res.send('<h1>学生的student请求</h1>');
})

//  /student/login
router.get('/login',function(req,res){
    res.send('<h1>学生的login请求</h1>');
})

//  /student/logout
router.get('/logout',function(req,res){
    res.send('<h1>学生的logout请求</h1>');
})

//  /student/choose
router.get('/choose',function(req,res){
    res.send('<h1>学生的选课请求</h1>');
})


// 暴露路由对象
module.exports = router;

