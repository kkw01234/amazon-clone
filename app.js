const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const passportConfig = require('./src/passport/passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const indexRouter = require('./routes/index');
const registerpage = require('./routes/register');
const loginpage = require('./routes/login');
const auth = require('./routes/auth');

const app = express();

// view engine setup
require('dotenv').config();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
passportConfig(passport);
app.use(session({
  secret : process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie:{
    httpOnly : true
  }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/register', registerpage);
app.use('/loginpage', loginpage);
app.use('/auth',auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
