require('./model/relation');
require('./services/init');

const stuServ = require('./services/studentService');

stuServ.getStudents().then(r=>console.log(r))

// stuServ.addStudent({
//   name: '孔明',
//   birthday:'1990-03-13',
//   sex: true,
//   mobile: '12312312322',
//   ClassId: '11'
// }).then(r => console.log(r))
// stuServ.deleteStudent(3366)
// require('./mock/mockStudent');

// const adminServ = require('./services/adminService');
// adminServ.addAdmin({
//   loginId:'qwe',
//   loginPwd:'123adg'
// }).then(r => console.log(r))

// adminServ.updateAdmin(5,{
//   loginId:'someOne',
//   loginPwd:'123'
// }).then(r => console.log(r))

// adminServ.login('someOne', '123').then(r => console.log(r))

// const stuServ = require('./services/studentService');
// stuServ.getStudents(1, 10,false,'陈').then(r=>console.log(r))

// const AdminServ = require('./services/adminService');
// AdminServ.login('newAdmin','321').then(r=>console.log(r))
// AdminServ.getAdminById(3).then(r=>console.log(r))
// require('./model/sync');
// const studentServ = require('./services/studentService');
// const adminServ = require('./services/adminService');

// const ClassServ = require('./services/classService');

// ClassServ.updateClass(2, {
//   name: '中央美术',
//   openDate:'2002.2.2'
// }).then(r=>console.log(r))

// ClassServ.deleteClass(1).then(r=>console.log(r))

// ClassServ.addClass({
//   name:'军校11期',
//   openDate:'2021.3.22',
// }).then(r=>console.log(r))

// studentServ.addStudent({
//   name:'王三分',
//   birthday:'1999-09-21',
//   sex:0,
//   mobile:'12345678901',
// }).then(r=>console.log(r))

// studentServ.deleteStudent(1).then(r=>console.log(r))

// studentServ.updateStudent(3, {
//   name:'someone',
//   birthday:'1998-04-30',
//   sex:1,
//   mobile:'11212143531',
// }).then(r=>console.log(r))

