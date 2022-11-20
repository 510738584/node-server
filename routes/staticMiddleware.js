module.exports = (req, res, next) => {
  console.log(req.path)
  if(req.path.startsWith('/api')){
    next()
  }else{
    if(true){//判断静态资源是否存在
      res.send('静态页面');
    }else{
      next()
    }
  }
}