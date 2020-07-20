/*
 * @Author: your name
 * @Date: 2020-07-20 14:28:43
 * @LastEditTime: 2020-07-20 14:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\day05\lianxi01\router.js
 */ 
    function showIndex(req,res){
        res.end('<h1 style="color:red;">这是首页</h1>');
    }
    function showInfo(req,res){
        res.end('<h1 style="color:red;">这是信息页</h1>');
    }
    function showErr(req,res){
        res.end('<h1 style="color:red;">这是错误页</h1>');
    }


module.exports = {
    showIndex: showIndex,
    showInfo: showInfo,
    showErr: showErr
}