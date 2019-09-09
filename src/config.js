const promisefs = require('./promisefs.js');
const fs = require('fs');
const path=require('path');



class Config {
    constructor(rootPath){
        this.root = path.resolve(rootPath);
        this._ = {}
    }
    loadSync(){
        this.loadDirSync(this.root, this._);
    }
    loadDirSync(dir, content){
        let list = fs.readdirSync(dir)
        for(let subPath of list){
            let subDir = dir + "/" + subPath;
            let stat = fs.statSync(subDir);
            let fileName = subPath.match(/[\w]+/)[0];
            if(stat.isDirectory()){
                if(!content[subPath]){
                    content[subPath] = {}
                }
                let subContent = content[subPath];

                this.loadDirSync(subDir, subContent);

            }else if(stat.isFile()){
                let extname = path.extname(subDir);
                if(extname == ".json" || extname == ".JSON" || extname == ".Json"){
                    try {
                        content[fileName] = this.loadJson(subDir);
                    } catch (error) {
                        console.debug("error:", error)
                    }
                }
            }else{

            }
        }
    }
    async load(){
        await this.loadDir(this.root, this._);
    }
    async loadDir(dir, content){
        let list = await promisefs.readdir(dir)
        for(let subPath of list){
            let subDir = dir + "/" + subPath;
            let stat = await promisefs.stat(subDir);
            let fileName = subPath.match(/[\w]+/)[0];
            if(stat.isDirectory()){
                if(!content[subPath]){
                    content[subPath] = {}
                }
                let subContent = content[subPath];

                await this.loadDir(subDir, subContent);

            }else if(stat.isFile()){
                let extname = path.extname(subDir);
                if(extname == ".json" || extname == ".JSON" || extname == ".Json"){
                    try {
                        content[fileName] = this.loadJson(subDir);
                    } catch (error) {
                        console.debug("error:", error)
                    }
                }
            }else{

            }
        }
    }
    loadJson(filePath){
        return require(filePath);
    }
}

module.exports = Config;
