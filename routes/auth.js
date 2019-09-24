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
            return res.redirect("/");
        });
    })(req,res,next);
});
router.get('/logout',function(req,res,next){

});

module.exports = router;
