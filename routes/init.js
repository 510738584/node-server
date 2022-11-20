// require('./logger');
// 使用session *************************************************
const express = require('express');
const app = express()
const path = require('path');
const staticRoot = path.resolve(__dirname, '../public');
const cors = require('cors');
const session = require('express-session');
const history = require('connect-history-api-fallback');

app.use(history())

// app.use(session({
//   secret:'someone',
//   name:'sessionId'
// }))

//静态页面中间件
app.use(express.static(staticRoot));

//跨域cors中间件
app.use(cors({
  origin(origin, callback){
   if(!origin){
    callback(null, '*');
    return
   }
   callback(null, origin);
  },
  credentials: true
}));
// app.use(require('./corsMiddleware'));

// 使用cookie-parser中间件处理cookie
// 服务端给客户端发送cookie用的
//加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
//加入之后，会在res对象中注入cookie方法，用于设置cookie
// const cookieParser = require('cookie-parser');
// app.use(cookieParser()); //不加密
// app.use(cookieParser('somenone'))//对称加密（用来加密也用来解密）需要在服务端发送cookie时加入signed参数

// 解析cookie
app.use(require('./tokenMiddleware'));

//处理请求头格式为(req.headers['content-type'] === 'application/x-www-form-urlencoded')的请求
app.use(express.urlencoded({
  extended: true,
}))
//处理请求头格式为(req.headers['content-type'] === 'application/json')的请求
app.use(express.json());

app.use('/api/student', require('./api/student'));
app.use('/api/admin', require('./api/admin'));

app.use(require('./errorMiddleware'));

const port = 5008;
app.listen(port, ()=>{
  console.log(`server listen on ${port}`)
})