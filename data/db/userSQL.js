/** 
 * @userSQL
 * connects users' information with MySQL
 * UserSQL文件负责导入User的id和姓名，User是登录后的浏览者。
 * 拥有的权限和能做的事情如下；
 * 1.发表留言
 * 2.评论日志 
 */
var UserSQL = {
    insert: 'INSERT INTO User(uid,userName) VALUES(?,?)',
    queryAll: 'SELECT * FROM User',
    getUserById: 'SELECT * FROM User WHERE uid = ? ',
    delUserById: 'DELETE FROM User WHERE uid = ? ',
    changeUserById: 'UPDATE User SET userName = ? WHERE uid = ?'
};
module.exports = UserSQL;