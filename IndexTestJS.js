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
