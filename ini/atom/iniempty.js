const { IINIContent } = require("./interfaces/iinicontent");

class INIEmpty extends IINIContent {
    constructor(iniPosition) {
        super();
        this.iniPosition = iniPosition;
    }

    getPosition() {
        return this.iniPosition;
    }

    toINIOutputString() {
        return "";
    }
}

exports.INIEmpty = INIEmpty;
