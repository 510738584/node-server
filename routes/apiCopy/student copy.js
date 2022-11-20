const express = require('express');
const router = express.Router();

const sendMsg = require('../sendMsg');
const {asyncHandler} = require('../sendMsg');
const studentServ = require('../../services/studentService');

router.get('/', async (req, res, next) => {
  // res.send('获取学生')
  //分页获取学生
  const page = req.query.page || 1;
  const limit = req.limit || 10;
  const sex = req.sex || -1;
  const name = req.name || '';
  const result = await studentServ.getStudents(page, limit, sex, name)
  res.send(sendMsg.getResult(result));
});


// router.get('/',  asyncHandler( async (req, res, next) => {
//   const page = req.query.page || 1;
//   const limit = req.limit || 10;
//   const sex = req.sex || -1;
//   const name = req.name || '';
//   return await studentServ.getStudents(page, limit, sex, name)
// }));

router.get('/:id', async (req, res, next) => {
  // res.send('获取单个学生');
  const result = await studentServ.getStudentById(req.params.id)
  res.send(sendMsg.getResult(result))
});

// router.post('/', async (req, res, next) => {
//   // res.send('添加一个学生');
//   try{
//     const result = await studentServ.addStudent(req.body);
//     res.send(sendMsg.getResult(result))
//   }catch(err){
//     next(err)
//   }
// });

router.post('/', asyncHandler(async (req, res, next) => {
  return await studentServ.addStudent(req.body);
}))

router.put('/:id', (req, res, next) => {
  res.send('修改一个学生');
});

module.exports = router;