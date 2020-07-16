/*
 * @Author: your name
 * @Date: 2020-07-16 11:29:27
 * @LastEditTime: 2020-07-16 11:41:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2-coded:\web2004\stage3\day03\01_test.js
 */ 
console.log('nodejs运行的js');

function show(){
    for(var i = 0;i<10; i++){
        console.log('第'+i+'行');
    }
}
show();
// console.log(window);
// console.log(location);
console.log(global);