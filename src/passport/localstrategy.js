const LocalStrategy = require('passport-local').Strategy;
const passport =require('passport');
const {UserDAO} = require('../dao/userdao');
/**
 * @param {passport} passport
 */
module.exports = (passport)=>{
    passport.use(new LocalStrategy({
        usernameField : 'id',
        passwordField : 'password'
    }, async (id, password, done)=>{
        try{
            UserDAO.findUserForIdAndPassword(id,password).then(res=>{
                if(res.length > 0){
                    done(null,res);
                }else
                    done(null,false);
            });
        }catch(e){
            done(e);
        }
    }))
}