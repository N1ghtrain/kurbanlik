var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const userFunctions = require('../user.js');
const mongoose = require('mongoose');


router.use(express.json())
router.use(express.urlencoded({extended: true}))


mongoose.connect('mongodb://127.0.0.1/kurbanlik', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     userCreateIndex: true
 }).then(() => {
   console.log('DB connection is set. -showListingsRouting.js-')
 });


router.post('/hash', userFunctions.hashAll);
router.post('/dehash', userFunctions.dehashAll);


module.exports = router;