const jwt = require('jsonwebtoken');
const secret = 'shhh';

exports.publish = function(res, maxAge = 3600 * 24, info = {}){
  const token = jwt.sign(info, secret, {
    expiresIn: maxAge * 1000
  });
  res.header('authorization', token);
}

exports.verify = function(req){
  let token = req.headers.authorization;
    if(!token){
      // 说明没有token
      return null
    }
    token = token.split(' ');
    token = token.length === 1 ? token[0] : token[1]
  try{
    const result = jwt.verify(token, secret);
    return result;
  }catch(err){
    return null;
  }  
}