var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/loginpage', function(req, res, next) {
  res.render('loginpage', { title: 'loginpage' });
});

module.exports = router;
