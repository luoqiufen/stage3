/*
 * @Author: your name
 * @Date: 2020-07-17 16:20:37
 * @LastEditTime: 2020-07-18 15:59:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day04\05_resddir.js
 */ 
var fs = require('fs');

// 读取当前文件夹里面的内容
/* fs.readdir('./',{withFileTypes:true},function(err,files){
    console.log(err);
    console.log(files);
    console.log(files[0]);
    console.log(files[0].name);
    console.log(files[0].isFile());

    for(var i=0;i<files.length;i++){
        if(files[i].isFile()){
            console.log(files[i].name+'是一个文件');
        }else{
            console.log(files[i].name+'是一个文件夹');
        }
    }
}) */


/* fs.readdir('./',function(err,files){
    for(var i=0;i<files.length;i++){
        fs.stat(files[i],function(err,state){
            if(state.isFile()){
                console.log(files.name+'是一个文件');
            }else{
                console.log(files.name+'是一个文件夹');
            }  
        })
    }
}) */

fs.readdir('./',function(err,files){
    

    
})
