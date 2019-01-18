/**
 * 这个文件夹存放sql语句
 */

const sqlCode = {
    pages: {
       getFivePages: 'SELECT title,createTime,id FROM pages_new ORDER BY id DESC LIMIT '
    }                 
}

module.exports = sqlCode
