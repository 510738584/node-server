// require('./logger');

const express = require('express');


const app = express()

app.get('/api/:id', (req, res)=>{
  //请求头
  console.log('请求头',req.headers);
  console.log('请求路径',req.path);
  console.log('请求查询参数 地址栏参数',req.query);  
  console.log('请求路由参数',req.params);
  //响应头
  console.log('设置响应头');
  res.setHeader('a','1');
  res.send([2,3,4])
  // console.log('重定向到腾讯课堂')
  // res.status(302).header('location','https://www.ke.qq.com').end()
  // res.status(302).location('https://www.ke.qq.com').end()
  // res.redirect(302, 'https://www.ke.qq.com')
})

app.use(require('./routes/errorMiddleware'));

const port = 5008;
app.listen(port, ()=>{
  console.log(`server listen on ${port}`)
})