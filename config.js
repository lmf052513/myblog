let fs = require('fs');
let globalConfig = {};
let confs = fs.readFileSync('./server.conf');
let confsArr = confs.toString().split('\r\n');
let len = confsArr.length;
confsArr.forEach(function (item){
    if(item){
        let temp = item.split('=');
        globalConfig[temp[0].trim()] = temp[1].trim();
    }
})
console.log(globalConfig)
module.exports = globalConfig;