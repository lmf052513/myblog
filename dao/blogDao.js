let dbUtil = require('./dbUtil.js');
function insertBlog(title, content, views, tags, ctime, utime, success) {
    let insertSql = "insert into blog (title,content,views,tags,ctime,utime) values(?,?,?,?,?,?)";
    let params = [title, content, views, tags, ctime, utime];
    // console.log(params)
    //连接服务器
    let connection = dbUtil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (err, result) {
        if (err == null) {
            success(result);     
        } else {
            throw new Error('404');
        }
    });
    connection.end();

}



module.exports.insertBlog = insertBlog;