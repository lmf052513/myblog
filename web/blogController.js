let path = new Map();
let blogDao = require('../dao/blogDao');
let url = require('url');
let getTime = require('../utils/getTime.js');
let responseWrite = require('../utils/responseWrite.js');
let tagsDao = require('../dao/tagsDao.js');
let tagBlogMappingDao = require('../dao/tagBlogMappingDao.js');
function editBlog(request,response){
request.on('data',function(data){
    let params = url.parse(request.url,true).query;
    let content = data.toString().trim();
    console.log(params['title'])
    blogDao.insertBlog(params.title,content,0,params.tag,getTime(),getTime(),function (result) {
        response.writeHead(200);
        response.write(responseWrite('success','添加成功',null));
        response.end();
        console.log(result.insertId);
        let blogId = result.insertId;
        let tags = params.tag.replace(/ /g,'').replace('，',',');//去除空格
        let tagsArr = tags.split(',');
        let len = tagsArr.length;
        for (let i = 0 ; i < len; i ++) {
            if(tagsArr[i] == '') {
               continue; 
            }
            queryTags(tagsArr[i],blogId);
        }
    })
})
}

function insertTags (tag,blogId){
    tagsDao.insertTags(tag,getTime(),getTime(),function(result) {
        insertTagBlogMapping(result.insertId,blogId);
    })
} 

function insertTagBlogMapping(tagId,blogId) {
    console.log('----');
    console.log(tagId,blogId);
    tagBlogMappingDao.insertTagBlogMapping(tagId,blogId,getTime(),getTime(),function (result) {
        console.log(result)
    })
}
function queryTags(tag,blogId) {
    //判断tag有没有
    tagsDao.queryTags(tag,function (result) {
        if(result == null || result.length == 0) {
            insertTags(tag,blogId);
        }else{
            insertTagBlogMapping(result[0].id,blogId);
        }
    })
}
path.set('/editBlog',editBlog);
module.exports = path;
