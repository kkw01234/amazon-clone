var express = require('express');
var router = express.Router();
const { UserDAO } = require("../src/dao/userdao");
const passport = require('passport');
/* GET home page. */
router.get('/',function (req, res, next) {
  res.render('loginpage', { title: 'loginpage' });
});


module.exports = router;
