/*
 * @Author: your name
 * @Date: 2020-07-18 09:48:43
 * @LastEditTime: 2020-07-18 11:33:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \stage3\part-3-week1\form.js
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var path = urlObj.pathname;

    /* if (path == "/favicon.ico") {
        return;
    } */

    if(path == '/tijiao'){
        var uname = urlObj.query.uname;
        var mes = urlObj.query.mes;

        // console.log(uname,mes);

        fs.writeFile('users/'+uname+'.txt','\n'+mes,{ flag: "a" },function(err){
            if(err){ 
                console.log('文件创建失败');
                return;
            }
            console.log('文件创建成功');
            return;
        })
    }

    if(path == '/show'){
        fs.readdir('users',function(err,files){
            (function iterate(i){
                if(i>=files.length){
                    return ;
                }
                console.log(files[i]);
                fs.stat(files[i],function(err,stats){
                    if(stats.isFile()){
                        fs.readFile(files[i],'utf-8',function(err,data){
                            if(err){
                                console.log('读取内容出错');
                                return;
                            }
                            res.end(files[i].name+'的内容:'+data);
                        })
                    }
                    i++
                    iterate(i)
                });
            })(0)
        })
    }

    fs.readFile('./test.html',function(err,data){
        if(err){
            res.end('读取文件失败');
            return;
        }
        res.end(data);
        return;
    })

    res.setHeader('content-type', 'text/html;charset=utf-8');

}).listen(4000)