/*
 * @Author: your name
 * @Date: 2020-07-17 14:09:05
 * @LastEditTime: 2020-07-17 14:37:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day04\02_mkdir.js
 */

var fs = require('fs');

//  异步方法
// recursive:是否创建父目录  默认值:false
fs.mkdir('a/b', { recursive: true }, function (err) {
    if (err) {
        console.log('创建失败');
        console.log(err);
        return;
    }
    console.log('创建成功');
})

// 同步方法
fs.mkdirSync('a');