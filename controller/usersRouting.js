var express = require('express');
var router = express.Router();
var express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const userFunctions = require('../user.js');



//middleware lazım
router.use(express.json())
router.use(express.urlencoded({extended: true}))



mongoose.connect('mongodb://127.0.0.1/kurbanlik', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 }).then(() => {
   console.log('DB connection is set. -usersRouting.js-')
 });



router.get('/', userFunctions.getUser);
router.post('/', userFunctions.createUser);
router.delete('/', userFunctions.deleteUser);


module.exports = router;