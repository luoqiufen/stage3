var express = require('express');
var mongoose = require('mongoose');
var app = express();
var cookieParser = require('cookie-parser');

app.listen(4000);

// cookieParser()的参数:如果不使用 signed cookie
// 参数可以不写
app.use(cookieParser());

var userSchema = new mongoose.Schema({
    username:String,
    password:String
})

var User = mongoose.model('user', userSchema);

var url = 'mongodb://localhost:27017/web';
var opt = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(url, opt)

app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    // 获取cookie,判断是否登录过
    var username = req.cookies.username;
    if(!username){
        res.send('<form action="/login" method="post"><p>用户名:<input type="text" name="username"></p><p>密码:<input type="password" name="password"><span></span></p><input type="submit" value="登录"></form><a href="/regist">没有账号?点击注册</a>');
        return;
    }
    // 找到用户名
    // 到数据库中检查该用户是否存在
    User.find({username:username},function(err,docs){
        if(err){
            console.log(err);
            res,send('网络故障');
            return;
        }
        if(docs.length==0){
            // 数据库中没有cookie里保存的用户名
            // 清除无效的cookie
            res.clearCookie('username');
            // 返回信息
            res.send('<h1>登录失效,请重新<a href="/">登录</a></h1>');
            return;
        }
        // 数据库中找到了对应cookie的用户名
        res.send('<h1>欢迎你,'+username+'</h1>');
    })

    res.send('<h1>欢迎你,'+username+'</h1>');
    return;
})

app.post('/login',function(req,res){
    var query = req.body;//{username:XXX,password:XXX}
    // 到数据库中查询
    User.find(query,function(err,docs){
        if(err){
            console.log(err);
            res,send('网络出错了');
            return;
        }
        if(docs.length==0){
            // 数据库中没有cookie里保存的用户名
            res.send('<h1>用户名或密码错误,请重新登录!</h1>');
            return;
        }
        // 用户名密码正确,登录成功,保存登录状态
        res.cookie('username',query.username);
        res.send('<h1>欢迎你,'+query.username+'</h1>');
    })
})

app.get('/regist',function(req,res){
    res.send('<form action="/regist" method="post"><p>用户名:<input type="text" name="username"></p><p>密码:<input type="password" name="password"></p><input type="submit" value="注册"></form><a href="/">已有账号?点击登录</a>');
})

app.post('/regist',function(req,res){
    var query = req.body;
    // 查看数据库中是否已经存在username
    User.find({username:query.username},function(err,docs){
        if(err){
            console.log(err);
            res,send('网络出错了');
            return;
        }
        if(docs.length>0){
            res.send('<h1>用户名已存在,请重新输入!</h1>');
            return;
        }
        // 用户名不存在
        var o = new User(query);
        o.save(function(err){
            if(err){
                console.log(err);
                res.send('网络错误,注册失败');
                return;
            }
            // 注册成功
            res.cookie('username', query.username);
            res.send('<h1>注册成功! 欢迎你,' + query.username + '</h1>');
        })
    })
})
