const allowOrigins = [
  'null','http://127.0.0.1:5500'
]

module.exports = (req, res, next) => {
  // 处理需要预检的请求
  if(req.method === 'OPTIONS'){
    res.header('access-control-allow-origin', req.headers['access-control-request-method']);
    res.header('access-control-allow-headers', req.headers['access-control-request-headers'])
  }
  // 处理附带身份凭证的请求 需要在fetch api里添加credentials属性
  // 对于附带身份凭证的请求，alloworigin不得设置为*
  res.header('access-control-allow-credentials', true)
  // 处理简单请求
  if('origin' in req.headers && allowOrigins.includes(req.headers.origin)){
    res.header('access-control-allow-origin', req.headers.origin);
  }
  next()
}