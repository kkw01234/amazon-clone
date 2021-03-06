// const cors = require('cors');
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
const registerpageRouter = require('./routes/registerpage');
const loginpageRouter = require('./routes/loginpage');
const adminpageRouter = require('./routes/adminpage');
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');
// const RedisStore = require('connect-redis')(session);
// const redis = require('./redis');
const FileStore = require('session-file-store')(session);
const app = express();
const sess_option = {
  retires : 5,
  minTimeout : 100,
  maxTimeout : 150
}
// view engine setup
// app.use(cors());
require('dotenv').config();
app.disable('etag');
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
  saveUninitialized: false,
  cookie :{
    maxAge : 1000 * 60 * 30,
    secure : false,
    httpOnly : true
  },
  // store : new RedisStore({
  //   client : redis,
  //   host : '106.10.35.161',
  //   port : 6379,
  //   prefix : session,
  //   db : 0,
  // })
  store : new FileStore(),
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/loginpage', loginpageRouter);
app.use('/auth',authRouter);
app.use('/registerpage', registerpageRouter);
app.use('/adminpage', adminpageRouter);
app.use('/admin', adminRouter);



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
  res.status(err.status || 500).send("Error");
  res.render('error');
});

module.exports = app;
