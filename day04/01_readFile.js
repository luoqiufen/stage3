/*
 * @Author: your name
 * @Date: 2020-07-17 12:45:23
 * @LastEditTime: 2020-07-18 11:07:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day04\01_readFile.js
 */ 
var fs = require("fs");

console.log(111)
fs.readFile("./day04.txt","utf-8",function(err,data){
  console.log(222)
  if(err){
    console.log("读取内容出错")
    return 
  }
  console.log(data)
})
console.log(333)
// 同步方法中没有回调函数，读取到的结果会作为返回值返回
// console.log(111)
// var data = fs.readFileSync("./day0.txt")
// console.log(222)
// console.log(data)