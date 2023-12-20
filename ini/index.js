const { INIEntryObject } = require("./entity/inientryobject");
const { INIObject } = require("./entity/iniobject");
const { INISectionObject } = require("./entity/inisectionobject");
const { INIFileGenerator } = require("./inifilegenerator");
const { INIFileParser } = require("./inifileparser");

module.exports = {
    INIFileParser,
    INIFileGenerator,
    INIObject,
    INISectionObject,
    INIEntryObject,
};
