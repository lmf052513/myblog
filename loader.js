let fs = require('fs');
let globalConfig = require('./config.js');
let pathMap = new Map();
let controllers = fs.readdirSync(globalConfig['web_path']);
controllers.forEach(function(item) {
    let path= require('./' + globalConfig['web_path'] + '/' + item);
    for ([k,v] of path) {
        if(pathMap.get(k) == null) {
            pathMap.set(k,v);
        }else{
            throw new Error('url error :' + k)
        }
    }
})

module.exports = pathMap;
