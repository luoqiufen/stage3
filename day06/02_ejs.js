/*
 * @Author: your name
 * @Date: 2020-07-21 11:33:11
 * @LastEditTime: 2020-07-21 20:07:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day06\02_ejs.js
 */ 

 const ejs = require('ejs');

//  定义模板
var str = '这是模板<%= name %>';

// 定义数据
var data = {
    name:'ejs'
}

// 渲染模板
var html = ejs.render(str,data);
console.log(html);