/*
 * @Author: your name
 * @Date: 2020-07-20 15:15:27
 * @LastEditTime: 2020-07-20 15:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\04\index.js
 */ 

//  引入其他小模块
var time = require('./formatTime');
var say = require('./sayHello');

var timeStr = time.getTime();
timeStr = '当前时间:'+timeStr;

// 将功能重新暴露出去
module.exports = {
    time:timeStr,
    say:say
}