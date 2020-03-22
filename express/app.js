var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 解析post参数插件
var bodyParser = require('body-parser');

// 头部接口文件
var headerRouter = require('./routes/header/index');
// 首页接口文件
var homeRouter = require('./routes/home/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 配置 body-parser 中间件 (插件, 专门用来解析表单 POST 请求)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * 这里的路径作为主路径，文件里 / 作为默认路径，可写子路径
 */
// 头部接口
app.use('/header', headerRouter);
// 首页接口
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
