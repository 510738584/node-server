require('./admin');
require('./class');
require('./student');
require('./Book');
const sequelize = require('./db');

(async function(){
  await sequelize.sync({
    alert:true,
    // force:true,
  })
  console.log('所有模型同步完成')
})()