/*
 * @Author: your name
 * @Date: 2020-07-17 14:33:58
 * @LastEditTime: 2020-07-17 15:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day04\03_writeFile.js
 */


var fs = require('fs');

var path = 'test.txt';
var data = '\n今天不上晚自习';
var ops = {flag:'a'}

fs.writeFile(path, data, ops, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('写入成功');
})