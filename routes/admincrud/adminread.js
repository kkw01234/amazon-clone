var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(403).send("주소를 다시 확인해주세요");
});

router.get('/main',function(req,res,next){
    res.render('adminpage',{title:"adminpage"})
});
router.get('/main/:id',function(req,res,next){
    res.render('crudpage',{title:"adminpage"})
});
router.get('/mini',function(req,res,next){
    res.render('adminpage',{title:"adminpage"});
});


module.exports = router;