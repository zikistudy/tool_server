// 导入定义验证规则的包
const joi = require('joi')

// 定义手机号和密码的校验规则
const count = joi.number().required() 
const time = joi.string().required() 
const minute = joi.number().required() 
const userName = joi.string().required()
// 注册
exports.reg_register_schema ={
    body:{
        userName,
        time,
        count,
        minute
    }
}
