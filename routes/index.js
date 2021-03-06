var express = require('express');
var router = express.Router();
const passport = require('passport');
const carouselDAO = require("../src/dao/carouseldao");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/data/:db', async function (req, res, next) {
    try {
        const db = req.params.db;
        const result = await carouselDAO[db].findAll();
        res.send({
            result: result
        });
    } catch (e) {
        res.send({result : false});
    }
});


module.exports = router;
