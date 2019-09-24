const LocalStrategy = require('passport-local').Strategy;
const passport =require('passport');
const {UserDAO} = require("../dao/userdao");
/**
 * @param {passport} passport
 */
module.exports = (passport) => {
    passport.serializeUser((user,done)=>{
        done(null, user);
    });
    passport.deserializeUser((user, done)=>{
        done(null, user);
    });
  
}