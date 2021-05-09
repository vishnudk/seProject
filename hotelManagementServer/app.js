var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userLoginRouter = require('./routes/userLogin');
var userSignup = require('./routes/userSignup');
var homePage = require('./routes/homePage');

var favicon = require('serve-favicon');
var app = express();
app.use(favicon(path.join(__dirname, 'public', 'images', 'gg.png')));
app.use(express.static(path.join(__dirname, 'public')));
const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://schoolUser:<password>@cluster0.13bcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userLogin', userLoginRouter);
app.use('/userSignup', userSignup);
app.use('/homePage', homePage);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(5000, '0.0.0.0', () => {
  console.log("server started!!")
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
