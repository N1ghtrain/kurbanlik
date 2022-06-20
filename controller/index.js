var express = require('express');
const res = require('express/lib/response');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log('index.js get request')
    res.render('index', { title: 'Kurbanlik' });
  });



module.exports = router;