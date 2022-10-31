// 导入数据库
const db = require("../db/index")

// 获取留言
exports.getRankList = (req,res)=>{
    // 获取信息
    let messageInfo = req.body
    // 定义sql语句
     // 查询表中
     let sqlStr = ''
     if(messageInfo.type == 'first'){
        sqlStr = 'select * from rank_user ORDER BY count DESC'
     }else{
        sqlStr = 'select * from rank_user ORDER BY minute'
     }
     db.query(sqlStr,(err,result)=>{
         // 执行sql语句失败
        if(err) return res.cc(err)
        let data = result.slice(0,15)
        res.send({
            status:'000000',
            message:'请求成功！',
            data,
            total:result.length
        })
     })
}
