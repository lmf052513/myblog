let express = require('express');
let globalConfig = require('./config.js');
let app =new express();
let pathMap = require('./loader.js');
console.log(globalConfig['page_path'])
app.use(express.static(globalConfig['page_path']));
app.post('/editEveryDay',pathMap.get('/editEveryDay'));
app.post('/editBlog',pathMap.get('/editBlog'));
app.get('/queryEveryDay',pathMap.get('/queryEveryDay'));
app.listen(globalConfig['port'],function(){
    console.log(`server is running at ${globalConfig['port']}`)
})