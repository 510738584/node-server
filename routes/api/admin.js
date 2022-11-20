// 使用jwt的方法

const express = require('express');
const router = express.Router();
const jwt = require('../jwt');

const {asyncHandler} = require('../sendMsg');
const adminServ = require('../../services/adminService');

router.post('/loginAdd', asyncHandler(async(req, res, next) => {
  const result = await adminServ.addAdmin(req.body);
  return result;
}))

router.post('/login', asyncHandler(async(req, res, next) => {
  const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
  //使用 cookie-parse 中间件
  if(result){//说明登录成功
    const value = result.id;
    // 适配浏览器
    jwt.publish(res, undefined, {id: value})
  }
  return result;
}))

router.get('/whoami', asyncHandler(async(req, res, next)=>{
  return adminServ.getAdminById(req.userId);
}))

module.exports = router;