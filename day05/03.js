/*
 * @Author: your name
 * @Date: 2020-07-20 11:34:51
 * @LastEditTime: 2020-07-20 14:36:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\03.js
 */

var a = require('./03_module.js');
console.log(a);

// console.log(a.name);
// a.say();

var stu1 = new a(13579,'虹猫');
console.log(stu1);
stu1.say();

var stu2 = new a(24680,'蓝兔');
console.log(stu2);