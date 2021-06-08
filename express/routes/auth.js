const auth = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    next();
  } else {
    res.render('auth', {
      data: JSON.stringify({
        msg: '无权限!请登录!'
      })
    })
  }
}

export default auth;
