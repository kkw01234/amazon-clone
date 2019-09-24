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
    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
        passReqToCallback: true
      }, async function (req, id, password, done) {
          const user = await UserDAO.findUserForIdAndPassword(id, password);
          if(user.length > 0)
            return done(null, user);
          else
            return done(null, false);
      }))
}