/*
 * @Author: your name
 * @Date: 2020-07-20 16:45:54
 * @LastEditTime: 2020-07-20 17:11:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\test.js
 */ 

 var sd = require('silly-datetime');

 var str = sd.format(new Date(),'YYYY年MM月DD日 hh时mm分ss秒 a');
 console.log(str);