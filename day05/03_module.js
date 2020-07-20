/*
 * @Author: your name
 * @Date: 2020-07-20 11:35:04
 * @LastEditTime: 2020-07-20 14:32:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\03_module.js
 */

var id = 1;
var name = '虹猫';
function say() {
    console.log('你好');
}
/* 
exports.id = id;
exports.name = name;
exports.say = say;
 */

/* module.exports={
    sid:id,
    sname:name,
    say:say
} */

function Stu(id,name) {
    this.id = id;
    this.name = name;
}

Stu.prototype.say = function () {
    console.log(this.name);
}

module.exports = Stu;