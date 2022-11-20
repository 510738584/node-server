const Student = require('../model/student');
const {Op} = require('sequelize');
const Class = require('../model/class');
const validate = require('validate.js');
const moment = require('moment');
const {pick} = require('../utils/propHelper');

exports.addStudent = async function(studentObj){
  studentObj = pick(studentObj, 'name', 'birthday', 'sex', 'mobile', 'ClassId');

  validate.validators.classExits = async function(ClassId){
    const id = await Class.findByPk(ClassId);
    if(id){
      return;
    }
    return 'is not exits';
  }

  const rules = {
    //验证规则
    name:{
      presence: {
        allowEmpty: false
      },
      type:'string',
      length:{
        minimum: 2,
        maximum: 10,
      }
    },
    birthday:{
      presence:{
        allowEmpty:false,
      },
      datetime:{
        dateOnly: true,
        earliest: +moment.utc().subtract(100,'y'),
        latest: +moment.utc().subtract(5, 'y')
      }
    },
    sex:{
      presence: true,
      type:'boolean',
    },
    mobile:{
      presence: {
        allowEmpty: false,
      },
      format: /1\d{10}/
    },
    ClassId: {
      presence: true,
      numericality: {
        onlyInteger: true,
        strict: false,
      },
      classExits: true,
    }
  }
  // const result = validate.validate(studentObj, rules);
  // return result;
  await validate.async(studentObj, rules);
  const ins = Student.create(studentObj);
  return ins;
};

exports.deleteStudent = async function(studentId){
  const ins = await Student.destroy({
    where:{
      id:studentId
    }
  });
  return ins;
};

exports.updateStudent = async function(studentId, studentObj){
  const ins = await Student.update(studentObj, {
    where:{
      id: studentId,
    }
  });
  return ins;
}

exports.getStudents = async function( page=1, limit=10, sex=-1,name=""){
  const where = {};
  if(sex !== -1){
    where.sex = !!sex;
  }
  if(name){
    where.name = {
      [Op.like]:`%${name}%`
    }
  }
  const result = await Student.findAndCountAll({
    where,
    attributes:['name','sex','birthday','mobile', 'age'],
    offset: (page-1)*limit,
    limit: +limit,
    include:[Class],
  });
  return {
    count: result.count,
    datas:JSON.parse(JSON.stringify(result.rows))
  }
}

exports.getStudentById = async function(id) {
  const result = await Student.findByPk(id)
  if(result){
    return result.toJSON()
  }
  return null;
}