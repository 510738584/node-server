const Mock = require('mockjs');

const result = Mock.mock({
  "datas|500-700":[
    {
      name: "@cname",
      birthday:"@date",
      "sex|1-2":true,
      mobile:/1\d{10}/,
      "ClassId|1-16":0,
    }
  ]
}).datas;

const Student = require('../model/student');

Student.bulkCreate(result);