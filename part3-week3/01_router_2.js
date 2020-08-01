var router = require('express').Router({
    mergeParams:true
});

router.get('/abc/:name2',function(req,res){
    console.log(req.params);

    res.send('over');
})


module.exports = router;