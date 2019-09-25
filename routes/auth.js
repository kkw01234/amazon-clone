var express = require('express');
var router = express.Router();
const passport = require('passport');

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
            console.log(user);
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
    if(result.length > 0){
        res.send({result : true});
    }else
        res.send({result : false});
});

router.get('/',function(req,res,next){
    if(req.isAuthenticated()){
        res.send({auth : true, username : req.session.passport.user.name});
    }else{
        res.send({auth : false});
    }
});

module.exports = router;
