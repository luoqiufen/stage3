// 演示用户名判断
var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.listen(4000);

var userSchema = new mongoose.Schema({
    uname:String,
    pwd:String
},{
    collection:'testUser'
})

var User = mongoose.model('user',userSchema);

var url = 'mongodb://localhost:27017/web';
var opt = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(url, opt);
 

app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('regist.ejs');
})

// 检查用户名是否存在
app.post('/check',function(req,res){
    var uname = req.body.uname.trim();
    if(uname == ''){
        res.send({status:1,msg:'用户名不能为空'});
        return;
    }
    if(!/^[a-zA-Z]*[a-zA-Z0-9_]?$/.test(uname)){
        res.send({status:1,msg:'用户名只能由数字字母和下划线组成,且必须以字母开头'});
        return;
    }
    if(uname.length<6 || uname.length>15){
        res.send({status:1,msg:'用户名必须为6-15位'});
        return;
    }

    // 检查uname
    User.find({uname:uname},function(err,result){
        if(err){
            console.log(err);
            res.send({status:1,msg:'network error'});
            return;
        }
        if(result.length>0){
            res.send({status:1,msg:'用户名已存在'});
        }else{
            res.send({status:0,msg:'用户名可以使用'});
        }
    })
})
