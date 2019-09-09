const fs = require('fs');

class PromiseFS {}
PromiseFS.readdir = async function (dir){
    return new Promise((resolve,reject)=>{
        fs.readdir(dir, (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
PromiseFS.stat = async function (filepath){
    return new Promise((resolve,reject)=>{
        fs.stat(filepath, (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

module.exports = PromiseFS;
