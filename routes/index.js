var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'V-Lab', ref: 'index'});
});

module.exports = router;
