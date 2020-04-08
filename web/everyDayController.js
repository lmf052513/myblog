
let path = new Map();
let everyDayDao = require('../dao/everyDayDao.js');
let getTime = require('../utils/getTime.js');
let responseWrite = require('../utils/responseWrite.js');
function editEveryDay(request,response){
request.on('data',function(data){
    let content = data.toString().trim();
    everyDayDao.insertEveryDay(content,getTime(),function (result){
        response.writeHead(200);
        response.write(responseWrite('sucess','添加成功',null));
        response.end();
    })
})
}
function queryEveryDay(request,response){
    everyDayDao.queryEveryDay(function (result) {
        response.writeHead(200);
        response.write(responseWrite('sucess','成功',result));
        response.end();
    })
    }
    

path.set('/editEveryDay',editEveryDay);
path.set('/queryEveryDay',queryEveryDay);
module.exports = path;