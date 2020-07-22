/*
 * @Author: your name
 * @Date: 2020-07-22 10:34:38
 * @LastEditTime: 2020-07-22 10:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day07\route\teacher.js
 */ 

//  创建teacher路由
var express = require('express');

// 创建路由对象
var router = express.Router();

router.get('/',function(req,res){
    res.send('<h2 style="color:red;">/teacher请求</h2>');
})
router.get('/login',function(req,res){
    res.send('<h2 style="color:red;">teacher/login请求</h2>');
})
router.get('/logout',function(req,res){
    res.send('<h2 style="color:red;">teacher/logout请求</h2>');
})
router.get('/publish',function(req,res){
    res.send('<h2 style="color:red;">teacher/publish请求</h2>');
})

module.exports = router;