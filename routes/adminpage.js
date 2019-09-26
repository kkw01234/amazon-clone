var express = require('express');
var router = express.Router();
const {isAdmin,isLoggIn} = require('./authoritycheck');
const adminread = require('./admincrud/adminread');
const adminwrite = require('./admincrud/adminwrite');

//router.use(isLoggIn,isAdmin);
router.use('/read', adminread);
router.use('/write', adminwrite);
router.get('/', function(req, res, next) {
  res.render('adminpage', { title: 'adminpage' });
});
router.get('/user', function(req, res, next) {
  res.render('adminpage', { title: 'adminpage' });
});


module.exports = router;
