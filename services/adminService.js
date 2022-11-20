const Admin = require('../model/admin');
const md5 = require('md5');

exports.addAdmin = async function (adminObj){
  adminObj.loginPwd = md5(adminObj.loginPwd);
  const ins = await Admin.create(adminObj);
  return ins.toJSON()
}

exports.deleteAdmin = async function(adminId){
  // const ins = await Admin.findByPk(adminId);
  // await ins.destroy()
  const ins = await Admin.destroy({
    where:{
      id:adminId
    }
  });
  return ins;
}

exports.updateAdmin = async function(adminId, adminObj){
  if(adminId.loginPwd){
    adminObj.loginPwd = md5(adminObj.loginPwd);
  }
  await Admin.update(adminObj,{
    where:{
      id:adminId,
    }
  })
}

exports.login = async function(loginId, loginPwd){
  loginPwd = md5(loginPwd);
  const result = await Admin.findOne({
    where:{
      loginId,
      loginPwd,
    }
  });
  if(result && result.loginId === loginId){
    return result.toJSON()
  }
  return null;
}

exports.getAdminById = async function(adminId){
  const result = await Admin.findByPk(adminId);
  if(result){
    return result.toJSON()
  }
  return null;
}