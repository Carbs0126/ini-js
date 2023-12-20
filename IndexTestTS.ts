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
