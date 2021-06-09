// 请求方式检测
function requestMethod(req, method, res) {
  if (req.method !== method) {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Illegal request,Wrong way to request')
  }
}

// 必传参数验证
function requiredParams(params, req, res) {
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

  // 缺少必需参数
  if (!isContained(field, params)) {
    res.writeHead(409, { 'Content-Type': 'text/plain' });
    res.end(`Missing required parameter,The required parameter is ${params}`);
  }
}

// 参数非空检测
function nonEmptyField(params, req, res) {
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
    res.writeHead(406, { 'Content-Type': 'text/plain' });
    res.end(`Parameter cannot be empty,Cannot be null parameter is ${emptyField}`)
  }
}

// 手机号格式检测
function phoneRegex(params, res) {
  const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;

  if (!reg.test(params)) {
    res.writeHead(406, { 'Content-Type': 'text/plain' });
    res.end('Param error,手机号不合法!')
  }
}

exports.requestMethod = requestMethod;
exports.requiredParams = requiredParams;
exports.nonEmptyField = nonEmptyField;
exports.phoneRegex = phoneRegex;
