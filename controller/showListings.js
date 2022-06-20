var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const listingFunctions = require('../listing.js');
const mongoose = require('mongoose');


// sadece farklı bir işlem için şurda dursun şimdilik
const userFunctions = require('../user.js');


router.use(express.json())
router.use(express.urlencoded({extended: true}))


mongoose.connect('mongodb://127.0.0.1/kurbanlik', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     userCreateIndex: true
 }).then(() => {
   console.log('DB connection is set. -showListingsRouting.js-')
 });


router.get('/', listingFunctions.showALL);
router.post('/', userFunctions.inactivateUser);


module.exports = router;