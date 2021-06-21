// 权限校验
function auth(req, res, next) {
  const token = req.headers.token;

  // 请求头token和cookie中token一致
  if (token && token === req.cookies.token) {
    next();
  }

  // 请求头token和cookie中token不一致
  if (token && token !== req.cookies.token) {
    res.status(403).send('Wrong token');
  }

  // 无权限
  if (!token) {
    res.status(401).send('No permission, please log in');
  }
  // res.writeHead(401, { 'Content-Type': 'text/plain' });
  // res.end('No permission, please log in');
}

// 必需参数校验
function requiredParams(params) {
  return requiredParams[params] || (requiredParams[params] = function (req, res, next) {
    // 获取请求参数
    let reqParams = null;
    if (req.method === 'GET') {
      reqParams = req.query;
    }
    if (req.method === 'POST') {
      reqParams = req.body;
    }

    // 获取请求参数key
    const field = Object.keys(reqParams);

    // 判断某个数组中是否包含另一个数组
    function isContained(a, b) {
      if (!(a instanceof Array) || !(b instanceof Array)) return false;
      if (a.length < b.length) return false;
      const aStr = a.toString();
      for (let i = 0, len = b.length; i < len; i++) {
        if (aStr.indexOf(b[i]) == -1) return false;
      }
      return true;
    }

    if (isContained(field, params)) {
      next();
    } else {
      // 缺少必需参数
      res
        .status(409)
        .send(`Missing required parameter,The required parameter is ${params}`);
    }
  });
}

// 参数非空校验
function nonEmptyField(params) {
  return nonEmptyField[params] || (nonEmptyField[params] = function (req, res, next) {
    // 获取请求参数
    let reqParams = null;
    if (req.method === 'GET') {
      reqParams = req.query;
    }
    if (req.method === 'POST') {
      reqParams = req.body;
    }

    // 空字段
    const emptyField = [];
    for (let i in reqParams) {
      // 需要验证的字段
      if (params.includes(i)) {
        if (!reqParams[i].replace(/(^\s+)|(\s+$)/g, '')) {
          emptyField.push(i);
        }
      }
    }

    // 参数为空
    if (emptyField.length > 0) {
      res
        .status(406)
        .send(`Parameter cannot be empty,Cannot be null parameter is ${emptyField}`);
    } else {
      next();
    }
  });
}

// 手机号格式校验(有bug，暂未处理)
function phoneRegex(params) {
  return phoneRegex[params] || (phoneRegex[params] = function (req, res, next) {
    const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;

    if (!reg.test(req.body.phone)) {
      next();
    } else {
      res
        .status(406)
        .send('Param error,手机号不合法!');
    }
  });
}

exports.auth = auth;
exports.requiredParams = requiredParams;
exports.nonEmptyField = nonEmptyField;
exports.phoneRegex = phoneRegex;
