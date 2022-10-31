const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户路由处理函数模块
const userHandler = require('../router_handler/userMessage.js')
router.post('/getRankList',userHandler.getRankList)

module.exports = router