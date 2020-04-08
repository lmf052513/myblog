let dbUtil = require('./dbUtil.js');
function insertEveryDay(content,ctime,success){
    let insertSql = 'insert into every_day (content,ctime) values(?,?)';
    let connection = dbUtil.createConnection();
    let params = [content,ctime]
    connection.connect();
    connection.query(insertSql,params,function (error,result){
        if(error == null){
            success(result)
        }else{
            throw new Error('server is not founded')
        }
    })
    connection.end();
}
function queryEveryDay(success){
    let insertSql = 'select * from every_day order by id desc limit 1';
    let connection = dbUtil.createConnection();
    let params = [];
    connection.connect();
    connection.query(insertSql,params,function (error,result){
        if(error == null){
            success(result)
        }else{
            throw new Error('server is not founded')
        }
    })
    connection.end();
}
module.exports.insertEveryDay = insertEveryDay
module.exports.queryEveryDay = queryEveryDay