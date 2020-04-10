var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 解析post参数插件
// var bodyParser = require('body-parser');
// 前端代理失效插件
// var proxyMiddleWare = require('http-proxy-middleware');

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

// 用于配置打包后，前端代理失效问题
// app.get('/', function (req, res) {
// 	res.sendFile(path.join(__dirname, '', 'index.html')) // 主页面
// })
// var proxyPath = "localhost:9000"; // 目标后端服务地址 打包后之前的跨域代理不生效 要在此用http-proxy-middleware插件跨域
// // var proxyPath = "http://152.136.19.14:7001"; // 目标后端服务地址 打包后之前的跨域代理不生效 要在此用http-proxy-middleware插件跨域
// var proxyOption = {
// 	target: proxyPath,
// 	changeOrigoin: true,
// 	ws: true,
// 	pathRewrite: { '^/api': '/' } // 把拼接路径 在浏览器中转成 / 现实用是要加的
// };
// app.use(proxyMiddleWare(proxyOption));
// app.use("/api", proxyMiddleWare(proxyOption)); // 这里是用可挂载中间件拼接虚拟路径  若是未打包之前的有拼路径api的就要加上

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
