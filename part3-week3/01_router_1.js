var router = require('express').Router({
    caseSensitive:true,//大小写敏感
    strict:true// 对/ 严格处理
});

router.get('/abc',function(req,res){
    res.send('test/abc');
})
router.get('/ABC',function(req,res){
    res.send('test/ABC');
})
router.get('/ABC/',function(req,res){
    res.send('test/ABC/');
})

module.exports = router;