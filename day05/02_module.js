/*
 * @Author: your name
 * @Date: 2020-07-20 11:14:33
 * @LastEditTime: 2020-07-20 11:23:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\02_module.js
 */ 

// 被引入的模块文件
console.log('这是02_mudule.js文件');

for(var i=0;i<4;i++){
    console.log(i);
}

function say(){
    console.log('hello!');
}
say();

function Stu(id,name){
    this.id=id;
    this.name=name;
}
Stu.prototype={
    say:function(){
        console.log(this.name);
    }
}

new Stu('12345','虹猫').say();
