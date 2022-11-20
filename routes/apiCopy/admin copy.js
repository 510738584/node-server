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
  // console.log(result)
  // return result;
  if(result){//说明登录成功
    res.header('set-cookie', `token=${result.id}; path=/; domain=localhost; max-age=3600; httponly`);
  }
  return result;
}))

module.exports = router;