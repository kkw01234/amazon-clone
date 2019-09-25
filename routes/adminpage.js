var express = require('express');
var router = express.Router();
const {isAdmin,isLoggIn} = require('./authoritycheck');
/* GET users listing. */
router.get('/', isLoggIn, isAdmin,function(req, res, next) {
  res.render('adminpage', { title: 'adminpage' });
});


module.exports = router;
