var express = require('express');
var router = express.Router();
const {UserDAO} = require('../src/dao/userdao.js');

/* GET users listing. */
router.get('/registerpage', function(req, res, next) {
  res.render('registerpage', { title: 'registerpage' });
});
router.post('/',async (req,res,next)=>{
    try{
      const result = await UserDAO.insertUser(req.body);
      res.send({result : true});
    }catch(e){
      res.send({result:false});
    }
    
});
router.post('/checkid',async (req,res,next)=>{
    const result = await UserDAO.findUser(req.body.id);
    if(result.length > 0){
        res.send({result : true});
    }else
        res.send({result : false});
});

module.exports = router;
