var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();
var cookieParser = require('cookie-parser');

app.listen(4000);

app.use(cookieParser('keyboard cat'));

var userSchema = new mongoose.Schema({
    username: String,
    password: String
})

var User = mongoose.model('user', userSchema);

var url = 'mongodb://localhost:27017/web';
var opt = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(url, opt);

// 判断是否登录过
app.get('/', function (req, res) {
    var username = req.cookies.username;
    if (username) {//登录过了
        res.send('<h1>欢迎你,' + username + '</h1>');
        return;
    }
    res.send('<form action="/login"><p>用户名:<input type="text" name="username"></p><p>密码:<input type="password" name="password"><span></span></p><input type="submit" value="登录"></form><a href="/regist">没有账号?点击注册</a>')
})


// 验证登录
app.get('/login', function (req, res) {
    var query = req.query;
    var username = query.username;
    var password = query.password;

    if (!username || !password) {
        res.send('<h1 style="color:red;">用户名或密码不能为空!</h1>');
        return;
    }

    // 查询数据库
    User.find(query, function (err, docs) {
        if (docs.length == 0) {
            res.send('<h1 style="color:red;">用户名或密码错误！</h1>');
            return;
        }
    })
})

app.get('/regist', function (req, res) {
    res.send('<form action="/register"><p>用户名:<input type="text" name="username"></p><p>密码:<input type="password" name="password"></p><input type="submit" value="注册"></form>');
})

// 注册验证
app.get('/register', function (req, res) {
    var query = req.query;
    var username = query.username;
    var password = query.password;
    if (!username || !password) {
        res.send('<h1 style="color:red;">用户名或密码不能为空!</h1>');
        return;
    }
    User.find({ username: username }, function (err, docs) {
        if (docs.length != 0) {
            res.send('<h1 style="color:red;">用户名已存在,请重新输入<h1>');
            return;
        }
        // 用户名不存在,注册
        var o = new User(query);
        o.save(function (err, doc) {
            console.log(err)
            console.log(doc)
        })

        res.cookie('username', username);
        res.send('<h1>注册成功! 欢迎你,' + username + '</h1>');
        return;
    })

})