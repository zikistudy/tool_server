//导入express模块
const express = require('express')
//创建express的服务器实例
const app = express()
var fs = require('fs');
var http = require('http');
var https = require('https');
// 导入cors中间件
const cors = require('cors')
// 导入定义验证规则的包
const joi = require('joi')
// var  bodyParser  =  require ( 'body-parser' )
// 将cors注册为全局中间件
app.use(cors())

//通过如下代码，配置解析application/x-www-form-urlencoded格式表单数据的中间件
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// 相应数据的中间件统一处理,在路由模块之前
app.use((req,res,next)=>{
    // status-000000成功，110000失败
    res.cc=(err,status='110000')=>{
        res.send({
            status,
            // 判断err是错误对象还是字符串
            message: err instanceof Error?err.message:err
        })
    }
    next()
})
// 一点要在路由之前配置解析token中间件
const expressJwt = require('express-jwt')

// 导入用户路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)
// 导入用户路由模块
const messageRouter  = require('./router/userMessage')
app.use('/api',messageRouter )
// app.use(bodyParser.json({limit:'100mb'}));
// app.use(bodyParser.urlencoded({ limit:'100mb', extended: true }));
// 定义错误级别的中间件
app.use((err,req,res,next)=>{
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError) return res.cc(err)
    // 解析token报错
    if(err.name == 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.cc(err)
})

const options = {
    key: fs.readFileSync('./public/ssl/server.key','utf-8'),
    cert: fs.readFileSync('./public/ssl/server.pem','utf-8'),
  }
var httpServer = https.createServer(options, app);
var server = http.createServer(app);
server.listen('3001',()=>{
    console.log('success listen at port:3001......')
});


