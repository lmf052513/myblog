
let dbUtil = require('./dbUtil.js');

function insertTags(tag,ctime,utime,success) {
    let insertSql = "insert into tags (tag,ctime,utime) values(?,?,?)";
    let params = [tag,ctime,utime];
    let connection = dbUtil.createConnection();
    connection.connect();
    connection.query(insertSql,params,function (err,result) {
        if(err == null) {
            success(result);
        }else{
            throw new Error('tags 404')
        }
    });
    connection.end();
}
function queryTags(tag,success) {
    let querySql = "select * from tags where tag = ?";
    let params = [tag];
    let connection = dbUtil.createConnection();
    connection.connect();
    connection.query(querySql,params,function (err,result) {
        if(err == null) {
            success(result);
        }else{
            throw new Error('tags 404')
        }
    });
    connection.end();
}

module.exports.insertTags = insertTags;
module.exports.queryTags = queryTags;