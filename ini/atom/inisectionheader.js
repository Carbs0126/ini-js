const { checkStringEmpty } = require("../util/iniutil");
const { IINIContent } = require("./interfaces/iinicontent");

class INISectionHeader extends IINIContent {
    constructor(sectionName, iniPosition) {
        super();
        this.sectionName = sectionName;
        this.iniPosition = iniPosition;
    }

    getPosition() {
        return this.iniPosition;
    }

    toINIOutputString() {
        if (checkStringEmpty(this.sectionName)) {
            throw new Error("Key of INISectionHeader should not be empty");
        }
        return this.sectionName;
    }
}

exports.INISectionHeader = INISectionHeader;
