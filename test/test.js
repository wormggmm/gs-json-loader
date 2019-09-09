const ConfigLoader = require("../index.js");


async function main(){
    var config = new ConfigLoader("./test/testConfig");
    await config.load();
    console.log("Async gs-json-loader test res:", JSON.stringify(config._, null, 2));
    console.log("Async getValue:", config._.testDir1.testConfig1.testkey1)

    var config = new ConfigLoader("./test/testConfig");
    config.loadSync();
    console.log("gs-json-loader Sync test res:", JSON.stringify(config._, null, 2));
    console.log("Sync getValue:", config._.testDir1.testConfig1.testkey1)

}
main();