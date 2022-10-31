const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user.js')

// 1.导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2.导入需要验证的规则对象
const {reg_register_schema} = require('../schema/user')

router.post('/register',expressJoi(reg_register_schema),userHandler.register)

module.exports = router