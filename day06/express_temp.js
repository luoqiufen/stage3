/*
 * @Author: your name
 * @Date: 2020-07-21 15:55:43
 * @LastEditTime: 2020-07-21 16:17:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day06\express_temp.js
 */ 

 var express = require('express');
 var app = express();

 app.listen(4000);

//  Nodejs默认的模板引擎是jade,所以 
// 如果要使用其他模板引擎,需要先设置
// 设置视图模板引擎为ejs
// 设置后,再使用res.render方法时,调用的模板的后缀名.ejs可以省略不写
// 如果不设置,则必须添加后缀名,express会根据后缀名自动调用对应的模板引擎
app.set('view engine','ejs');

app.get('/',function(req,res){
    // 模拟从数据库中获取到的数据
    var stus = [
        {id:001,name:'虹猫'},
        {id:002,name:'蓝兔'},
        {id:003,name:'猪猪侠'},
        {id:004,name:'加菲猫'}
    ];
    // 将数据传递给模板渲染展示
    // 第一个参数表示模板名称(views文件夹中的模板)
    // 第二个参数表示渲染的数据(必须是json格式)
    // 第三个参数是回调函数
    res.render('show',{stus:stus});
})