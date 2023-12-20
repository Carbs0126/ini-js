1. Decode ini files and encode ini object into file;
2. execute "./index.js" in terminal, you can get a ini object from test-input.ini file and then encode the object into test-output.ini file;


# ini文件解析
## ini文件格式说明
https://zh.wikipedia.org/wiki/INI%E6%96%87%E4%BB%B6

``` java
; last modified 1 April 2001 by John Doe
[owner]
name=John Doe
organization=Acme Products

[database]
server=192.0.2.42 ; use IP address in case network name resolution is not working
port=143
file="acme payroll.dat"
```

## 附加说明
1. 键值对中，允许值中存在空格；
2. section 没有做嵌套处理


## 使用
使用javascript时：(参考IndexTestJS.js)
``` javascript
#!/usr/bin/env node
const path = require("path");
const ini = require("./ini/index");

let iniObject = ini.INIFileParser.parseFileToINIObject(
    path.resolve("test-input.ini")
);

// resolve 类型是 INIObject
iniObject.then((resolve) => {
    // console.log(resolve.toString());
    ini.INIFileGenerator.generateFileFromINIObject(
        resolve,
        path.resolve("test-output.ini")
    )
        .then((resolve) => {
            console.log("INIFileGenerator Resolve:", resolve);
        })
        .catch((error) => {
            console.error("INIFileGenerator Error:", error);
        });
});
```

使用typescript时：(参考IndexTestJTS.ts)
```typescript
import * as ini from "./ini/index";
const path = require("path");

let iniObject = ini.INIFileParser.parseFileToINIObject(
    path.resolve("test-input.ini")
);
iniObject.then((resolve) => {
    // console.log(resolve.toString());
    ini.INIFileGenerator.generateFileFromINIObject(
        resolve,
        path.resolve("test-output.ini")
    )
        .then((resolve) => {
            console.log("INIFileGenerator Resolve:", resolve);
        })
        .catch((error) => {
            console.error("INIFileGenerator Error:", error);
        });
});
```
