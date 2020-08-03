// var crypto = require('crypto');
// var fs = require('fs');

// 1. 给密码(明文)加密
// var str = '123';

// 2. 验证文件的数据一致性
// var data = fs.readFileSync('./note14.text').toString()

// 3. 一般情况下,需要加密多次
// var str = '123';

// var pas = crypto.createHash('md5').update(str).digest('base64');

// // 加盐
// pas = pas.substring(3,9);
// pas = 'www.'+pas+'.com.cn';
// console.log(pas);
// // www.5YqxZB.com.cn

// var pas = crypto.createHash('md5').update(pas).digest('base64');

// console.log(pas);

var { encrypt } = require('./myMd5.js');
var pass = encrypt('123');
console.log(pass);