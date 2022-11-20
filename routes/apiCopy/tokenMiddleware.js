const {getErr} = require('../sendMsg');
const {pathToRegexp} = require('path-to-regexp');
const needToken = [
  {method: 'GET', path:'/api/student'}
]
module.exports = (req, res, next) => {
  const apis = needToken.filter(api => {
    const reg = pathToRegexp(api.path);
    return api.method === req.method && reg.test(req.path);
  })
  if(apis.length === 0) {
    //不用认证
    next();
    return
  }
  let token = req.cookies.token;
  if(!token) {
    token = req.headers.authorization;
  }
  if(!token){
    console.log('没有token，认证失败')
    handleNoToken(req, res, next);
    return
  }
  console.log('有token，认证成功');
  next()
}

function handleNoToken(req, res, next){
  res.send(getErr('you dont have any token to access the api', 403));
}