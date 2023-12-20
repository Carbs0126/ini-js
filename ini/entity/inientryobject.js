const {
    checkArrayEmpty,
    checkArrayNull,
    checkObjectNull,
} = require("../util/iniutil");

class INIEntryObject {
    constructor() {
        this.comments = new Array();
        this.inikvPair = null;
    }

    setKVPair(inikvPair) {
        this.inikvPair = inikvPair;
    }

    getKVPair() {
        return this.inikvPair;
    }

    addComments(comments) {
        if (checkArrayEmpty(comments)) {
            return;
        }
        if (checkArrayNull(this.comments)) {
            this.comments = comments;
        }
        comments.forEach((item, index) => {
            this.comments.push(item);
        });
    }

    addComment(comment) {
        if (checkObjectNull(comment)) {
            return;
        }
        if (checkArrayNull(this.comments)) {
            this.comments = new Array();
        }
        this.comments.push(comment);
    }

    getComments() {
        return this.comments;
    }

    generateContentLines() {
        let lines = new Array();
        if (!checkArrayEmpty(this.comments)) {
            this.comments.forEach((item, index) => {
                lines.push(item);
            });
        }
        if (!checkObjectNull(this.inikvPair)) {
            lines.push(this.inikvPair);
        }
        return lines;
    }
}

exports.INIEntryObject = INIEntryObject;
