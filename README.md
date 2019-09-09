# gs-json-loader
Load all Json file in a dir which file by end of .json .Json .JSON.
Support node version: 8.11.1/8.11.1+ need node support await/async
e.g. workSpace:
```
testConfig
|--testDir1
|----testConfig1.json
|--testConfig2.json
```
Code:
## Usage Async
```javascript 
const JsonLoader = require("gs-json-loader");

let config1 = new JsonLoader("./testConfig");
await config1.load();
console.log("getValue:", config1._.testDir1.testConfig1.testkey1)
```

## Usage Sync
```javascript 
const JsonLoader = require("gs-json-loader");

let config1 = new JsonLoader("./testConfig");
config1.loadSync();
console.log("getValue:", config1._.testDir1.testConfig1.testkey1)
```
