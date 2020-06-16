var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 解析post参数插件
// var bodyParser = require('body-parser');

// 头部接口文件
var headerRouter = require('./routes/header/index');
// 首页接口文件
var homeRouter = require('./routes/home/index');
// 沸点接口文件
var boilingPointRouter = require('./routes/boiling-point/index');
// 话题接口文件
var topicRouter = require('./routes/topic/index');
// 小册接口文件
var brochureRouter = require('./routes/brochure/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 配置express静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 貌似脚手架已经默认配置过了post，所以进行注释，运行正常。
// // 配置 body-parser 中间件 (插件, 专门用来解析表单 POST 请求)
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// 携带cookie需要配置，貌似不需要,所以进行注释，运行正常。
// app.all("*", (req, res, next) => {
//   res.header("Access-Control-Allow-Credentials", "true"); //划重点
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //这里写 * 貌似会报错,就改成请求ip了
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   next();
// })

// 上传到服务器启用，Access-Control-Allow-Origin 改为服务器公网IP
// app.use(function(req,res,next){
//   res.header('Access-Control-Allow-Origin', 'http://47.98.250.26'); // *
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header("Content-Type", "application/json;charset=utf-8");
//   res.header('Access-Control-Allow-Credentials','true');
//   next();
// })

/**
 * 这里的路径作为主路径，文件里 / 作为默认路径，可写子路径
 */
// 头部接口
app.use('/header', headerRouter);
// 首页接口
app.use('/home', homeRouter);
// 沸点接口
app.use('/boiling-point', boilingPointRouter);
// 话题接口
app.use('/topic', topicRouter);
// 小册接口
app.use('/brochure', brochureRouter);

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
