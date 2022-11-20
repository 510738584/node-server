const jwt = require('jsonwebtoken');
const secret = 'shhh';
const cookieKey = 'token';

exports.publish = function(res, maxAge = 3600 * 24, info = {}){
  const token = jwt.sign(info, secret, {
    expiresIn: maxAge * 1000
  });
  res.cookie(cookieKey, token, {
    maxAge,
    path:'/'
  })
  res.header('authorization', token);
}

exports.verify = function(req){
  let token;
  //尝试从cookie里面找token
  token = req.cookies[cookieKey];
  if(!token){
    //说明cookies里没有token， 现在尝试从headers里面找
    token = req.headers.authorization
    if(!token){
      // 说明没有token
      return null
    }
    token = token.split(' ');
    token = token.length === 1 ? token[0] : token[1]
  }
  try{
    const result = jwt.verify(token, secret);
    return result;
  }catch{
    return null;
  }
}