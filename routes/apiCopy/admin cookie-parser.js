// 使用cookie-parser中间件的方法

const express = require('express');
const router = express.Router();

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
    res.cookie("token",value, {
      path:'/',
      domain:'localhost',
      maxAge: 3600*24*7*1000, //毫秒数
      signed: true, //cookie-parser里面的对称加密，在init中间件时声明的
    });
    // 适配移动端设备
    res.header('authorization',value);
  }
  return result;
}))

module.exports = router;