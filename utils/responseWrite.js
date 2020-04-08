function responseWrite(status,msg,data){
    return JSON.stringify({
        status,
        msg,
        data
    })
}

module.exports = responseWrite;