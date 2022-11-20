const Mock = require('mockjs');

const result = Mock.mock({
  "datas|16":[
    {
      "id|+1": 1,
      name: "@string(5)",
      openDate:"@date",
    }
  ]
}).datas;

console.log(result);

const Class = require('../model/class');

Class.bulkCreate(result).catch(err=>console.log(err));