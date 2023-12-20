const { checkStringEmpty } = require("../util/iniutil");
const { IINIContent } = require("./interfaces/iinicontent");

class INIKVPair extends IINIContent {
    constructor(key, value, iniPosition) {
        super();
        this.key = key;
        this.value = value;
        this.iniPosition = iniPosition;
    }

    getPosition() {
        return this.iniPosition;
    }

    toINIOutputString() {
        if (checkStringEmpty(this.key)) {
            throw new Error("Key of INIEntry should not be empty");
        }
        if (checkStringEmpty(this.value)) {
            this.value = "";
        }
        return this.key + "=" + this.value;
    }
}

exports.INIKVPair = INIKVPair;
