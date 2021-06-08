// 请求方式检测
function requestMethod(req, method, res) {
  if (req.method !== method) {
    res.writeHead(405, { '': 'text/plain' });
    res.end('Illegal request,Wrong way to request')
  }
}

// 参数非空检测
function nonEmptyField(req, res) {
  let params = null;
  if (req.method === 'GET') {
    params = req.params;
  }
  if (req.method === 'POST') {
    params = req.body;
  }

  const emptyField = [];
  for (let value in params) {
    if (!params[value].replace(/(^\s+)|(\s+$)/g, '')) {
      emptyField.push(value);
    }
  }

  if (emptyField.length > 0) {
    res.writeHead(406, { 'Content-Type': 'text/plain' });
    res.end(`Param error,${emptyField.join(' and ')}`)
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
exports.nonEmptyField = nonEmptyField;
exports.phoneRegex = phoneRegex;
