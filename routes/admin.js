var express = require('express');
var router = express.Router();
const {isAdmin,isLoggIn} = require('./authoritycheck');
const {UserDAO} = require('../src/dao/userdao');
const {bottomCarousel,miniCarousel} = require("../src/dao/carouseldao");
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
});
router.get('/findallmini',async function(req,res,next){
    const minis = await miniCarousel.findAll();
    res.send(minis);
});

router.post('/auth-change/:id', async function(req,res,next){
    console.log(req.body);
    try{
        const result = await UserDAO.updateUsersAuthority(req.params.id,req.body.change_authority_name);
        res.send({result, id : req.params.id, authority_name : req.body.change_authority_name});
    }catch(e){ 
        next(e);
    }
});
router.post('/deletemini',async (req,res,next)=>{
    try{
        const mini_index = req.body.mini_index;
        console.log(mini_index);
        const result = await miniCarousel.delete(mini_index);
        if(result)
            res.send({result : true});
        else
            res.send({result : false});
    }catch(e){
        next(e);
    }
});
router.post('/deletebottom',async (req,res,next)=>{
    try{
        const bottom_index = req.body.bottom_index;
        const result = await bottomCarousel.delete(bottom_index);
        if(result)
            res.send({result : true});
        else
            res.send({result : false});
    }catch(e){
        next(e);
    }
});


module.exports = router;
