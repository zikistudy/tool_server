/** 
*在这里定义和用户相关的的路由处理函数，供/router/user.js模块进行调用
*/
// 导入数据库
const db = require("../db/index")
// 注册用户的处理函数
var moment = require('moment');
exports.register = (req,res)=>{
    // 获取注册的用户信息
    let userInfo = req.body
    let createDate = moment().format('YYYY-MM-DD hh:mm')
    console.log(createDate,'00000')
    // 注册成功插入表中
    const  addSql = 'INSERT INTO rank_user set ?';
    db.query(addSql,{userName:userInfo.userName,minute:userInfo.minute,time:userInfo.time,count:userInfo.count,createDate:createDate},(err,result)=>{
        // 执行sql语句失败
        if(err) return res.cc(err)
        // 执行sql语句成功，但是影响行数不为1
        if(result.affectedRows !== 1){
            return res.cc('加入排行榜失败，请稍后再试！')
        }
        res.cc('加入成功！','000000')
    })

}
