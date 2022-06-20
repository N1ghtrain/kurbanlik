const mongoose = require('mongoose');
const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();


const indexRouter = require('./controller/index.js');
const signUpRouter = require('./controller/usersRouting.js');
const createListingRouter = require('./controller/listingRouting.js');
const showAllListingsRouter = require('./controller/showListings.js');
const showAllUsersRouter = require('./controller/showUsers.js');
const hashingRouter = require('./controller/hash.js');

console.log('Hello World!');



router.use(express.json())
router.use(express.urlencoded({extended: true}))




var app = express();

app.use('/', indexRouter);
app.use('/users', signUpRouter);
app.use('/listings', createListingRouter);
app.use('/show-all-listings', showAllListingsRouter);
app.use('/show-all-users', showAllUsersRouter);
app.use('/hashing', hashingRouter);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






// hata var ise
app.use(function(req, res, next) {
    next(createError(404));
  });
  
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//dursun, sebep sorayım
module.exports = app;




///// bir collection oluşturulduğunda ilk başta required veya unique olarak tanımlanan verileri hatırlayıp istiyor

///// 
/////