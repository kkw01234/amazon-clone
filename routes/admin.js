var express = require('express');
var router = express.Router();
const {isAdmin,isLoggIn} = require('./authoritycheck');
const {UserDAO} = require('../src/dao/userdao');
const {bottomCarousel} = require("../src/dao/carouseldao");
router.get('/findalluser',async function(req, res, next) {
    try{
        const users = await UserDAO.findAllUser();
        res.send({users});
    }catch(e){
        next(e);
    }
});
router.get('/findallauthoritynames', async function(req,res,next){
    try{
        const authorityNames = await UserDAO.findAllAuthorityNames();
        res.send(authorityNames);
    }catch(e){
        next(e);
    }
});
router.get('/findallbottom',async function(req,res,next){
    const bottoms = await bottomCarousel.findAll();
    res.send(bottoms);
})

router.post('/auth-change/:id', async function(req,res,next){
    console.log(req.body);
    try{
        const result = await UserDAO.updateUsersAuthority(req.params.id,req.body.change_authority_name);
        res.send({result, id : req.params.id, authority_name : req.body.change_authority_name});
    }catch(e){ 
        next(e);
    }
});


module.exports = router;
