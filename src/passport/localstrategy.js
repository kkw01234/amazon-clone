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
            const user = await UserDAO.findUserForIdAndPassword(id,password);
            done(null, user);
        }catch(e){
            done(e);
        }
    }))
}