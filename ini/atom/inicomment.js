const { IINIContent } = require("./interfaces/iinicontent");

class INIComment extends IINIContent {
    constructor(comment, iniPosition) {
        super();
        this.comment = comment;
        this.iniPosition = iniPosition;
    }
    getPosition() {
        return this.iniPosition;
    }

    toINIOutputString() {
        return this.comment;
    }
}

exports.INIComment = INIComment;
