var express = require('express');
var router = express.Router();
const {isAdmin,isLoggIn} = require('./authoritycheck');
const {UserDAO} = require('../src/dao/userdao');
router.get('/findalluser',async function(req, res, next) {
    try{
        const users = await UserDAO.findAllUser();
        res.send({users});
    }catch(e){
        next(e);
    }
});

router.get('/authoritychange/:id', isLoggIn, isAdmin,function(req,res,next){
});


module.exports = router;
