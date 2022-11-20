const express = require('express');
const router = express.Router();

const {asyncHandler} = require('../sendMsg');
const studentServ = require('../../services/studentService');

// 分页获取学生
router.get('/', asyncHandler (async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const sex = req.query.sex || -1;
  const name = req.query.name || '';
  return await studentServ.getStudents(page, limit, sex, name)
}));

//改写jsonp
// router.get('/', asyncHandler (async (req, res, next) => {
//   const page = req.query.page || 1;
//   const limit = req.query.limit || 10;
//   const sex = req.query.sex || -1;
//   const name = req.query.name || '';
//   const result = await studentServ.getStudents(page, limit, sex, name)
//   const jsonp = JSON.stringify(result);
//   res.header('content-type','application/javascript').send(`callback(${jsonp})`);
// }));

//获取单个学生
router.get('/:id',asyncHandler( async (req, res, next) => {
  // res.send('获取单个学生');
  return await studentServ.getStudentById(req.params.id)
}));

//添加学生
router.post('/', asyncHandler(async (req, res, next) => {
  return await studentServ.addStudent(req.body);
}));

//修改学生
router.put('/:id', asyncHandler (async (req, res, next) => {
  return await studentServ.updateStudent(req.params.id, req.body);
}));

//删除一个学生
router.delete('/:id', asyncHandler(async (req, res, next) => {
  return await studentServ.deleteStudent(req.params.id);
}))

module.exports = router;