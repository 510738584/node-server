// jwt方式完成验证
const {pathToRegexp} = require('path-to-regexp');
const jwt = require('./jwt');
const {getErr} = require('./sendMsg');
const needToken = [
  {method: 'POST', path: '/api/student'},
  {method: 'PUT', path: '/api/student/:id'},
  {method: 'DELETE', path:'/api/student/:id'},
  {method: 'GET', path:'/api/student'},
  {method: 'GET', path:'/api/student/:id'},
  {method: 'GET', path:'/api/admin/whoami'},
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
  const resp = jwt.verify(req)
  if(resp){
    req.userId = resp.id;
    next()
  }else{
    handleNonToken(req, res, next);
  }
}

function handleNonToken(req, res, next) {
  res.status(403).send(getErr('you dont have any token to access the api', 403));
}