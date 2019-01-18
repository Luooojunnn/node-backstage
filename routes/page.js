var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// 导入配置信息和sql语句
var config = require('../db/config')
var sqlCode = require('../db/sql')

// 创建一个连接池
let pool = mysql.createPool(config)

// 响应数据统一处理函数
function responseJSON(data) {
  return JSON.parse(JSON.stringify(data))
}



router.get('/getFivePages', function(req, res, next) {
  
  pool.getConnection((err, connection) => {
    if (err) {throw new Error('连接报错')}
    // 这里获取前台传过来的参数
    console.log(req.query.nums)
    let n = (req.query && req.query.nums) || 5
    // 连接池里的实体连接对象进行操作
    connection.query(sqlCode.pages.getFivePages + n, (error, result) => {
      if (err) {throw new Error('查表报错')}
      res.json(responseJSON(result))
      connection.release()
    })
  })
});

module.exports = router;
