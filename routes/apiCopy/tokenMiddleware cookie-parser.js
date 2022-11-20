
const {pathToRegexp} = require('path-to-regexp');
const {getErr} = require('./sendMsg');
const needToken = [
  {method: 'POST', path: '/api/student'},
  {method: 'PUT', path: '/api/student/:id'},
  {method: 'DELETE', path:'/api/student/:id'},
  // {method: 'GET', path:'/api/student'},
  {method: 'GET', path:'/api/student/:id'}
];

module.exports = (req, res, next) => {
  const result = needToken.filter(api => {
    const reg = pathToRegexp(api.path);
    return api.method === req.method && reg.test(req.path);
  })
  if(result.length === 0) {
    next();
    return;
  }
  // let token = req.cookies.token;
  //使用cookie-parser对称加密后
  let token = req.signedCookies.token;
  if(!token) {
    token = req.headers.authorization;
  }
  if(!token){
    //没有token
    handleNonToken(req, res, next);
    console.log('认证未通过');
    return
  }
  const userId = token;
  req.userId = userId;
  console.log('认证通过');
  next()
}

function handleNonToken(req, res, next) {
  res.send(getErr('you dont have any token to access the api', 403));
}