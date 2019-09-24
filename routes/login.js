var express = require('express');
var router = express.Router();
const { UserDAO } = require("../src/dao/userdao");
const passport = require('passport');
/* GET home page. */
router.get('/loginpage', function (req, res, next) {
  res.render('loginpage', { title: 'loginpage' });
});
router.post('/', function (req, res, next) {

  // const { id, password } = req.body;
  // try {
  //   const user = await UserDAO.findUserForIdAndPassword(id, password);
  //   passport.serializeUser(function (user, done) {
  //     done(null, user);
  //   });
  //   result.length > 0 ? res.redirect("/") : res.send({ result: false });
  // } catch (e) {
  //   res.send({ result: false });
  // }
});

module.exports = router;
