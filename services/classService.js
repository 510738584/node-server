const Class = require('../model/class');

exports.addClass = async function(classObj){
  const ins = await Class.create(classObj);
  return ins;
};

exports.deleteClass = async function(classId){
  const ins = await Class.destroy({
    where:{
      id: classId,
    }
  });
  return ins;
}

exports.updateClass = async function(classId, classObj){
  const ins = await Class.update(classObj, {
    where:{
      id: classId
    }
  });
  return ins;
}