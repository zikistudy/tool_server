// 导入mysql模块
const mysql = require('mysql')
// 本地
// 创建数据库连接对象
// var db = mysql.createPool({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'ikobe2020',
//     database : 'digital_game',
//     port: '3306',
//   });
// var db = mysql.createPool({
//   host     : '121.40.217.227',
//   user     : 'ikobe',
//   password : 'JxhN56j3Jc7wKFyR',
//   database : 'ikobe',
//   port: '3306',
// });
// 生产
var db = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'digital_game',
  password : '7tRAxsnTZJTCB5Xa',
  database : 'digital_game',
  port: '3306',
});
// 向外界共享db数据
module.exports =  db