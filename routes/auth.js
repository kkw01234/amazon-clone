var express = require('express');
var router = express.Router();
const passport = require('passport');
const {UserDAO} = require("../src/dao/userdao");
router.post('/login',  (req, res, next)=> {
    passport.authenticate('local', (authError,user,info)=>{
        if(authError){
            return next(authError);
        }
        if(!user){
            return res.send({result:false});
        }
        return req.logIn(user, (loginError)=>{
            if(loginError){
               return next(loginError);
            }
            return res.send({result : true});
        });
    })(req,res,next);
});
router.get('/logout',function(req,res,next){
    req.logout();
    req.session.destroy();
    res.redirect("/");
});
router.post('/register',async (req,res,next)=>{
    try{
      const result = await UserDAO.insertUser(req.body);
      if(result)
        res.send({result:true});
    }catch(e){
      res.send({result:false});
    }
    
});
router.post('/checkid',async (req,res,next)=>{
    const result = await UserDAO.findUser(req.body.id);
    if(result){
        res.send({result : true});
    }else
        res.send({result : false});
});

router.get('/',function(req,res,next){
    console.log(req.user);
    if(req.isAuthenticated()){
        res.send({auth : true,
             username : req.user.name,isAdmin : req.user.authority_level === 0 ? true : false});
    }else{
        res.send({auth : false});
    }
});

module.exports = router;
