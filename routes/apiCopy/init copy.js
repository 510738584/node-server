// require('./logger');
// 原始格式。没有cookie*****************************
const express = require('express');
const app = express()
const path = require('path');
const staticRoot = path.resolve(__dirname, '../public');
//静态页面中间件
app.use(express.static(staticRoot));

//处理请求头格式为(req.headers['content-type'] === 'application/x-www-form-urlencoded')的请求
app.use(express.urlencoded({
  extended: true,
}))
//处理请求头格式为(req.headers['content-type'] === 'application/json')的请求
app.use(express.json());

app.use('/api/student', require('../api/student'));
app.use('/api/admin', require('../api/admin'));

app.use(require('../errorMiddleware'));

const port = 5008;
app.listen(port, ()=>{
  console.log(`server listen on ${port}`)
})