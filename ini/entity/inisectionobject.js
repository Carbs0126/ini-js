const {
    checkObjectNull,
    checkArrayEmpty,
    checkArrayNull,
} = require("../util/iniutil");

class INISectionObject {
    constructor() {
        this.iniSectionHeader = null;
        this.comments = new Array();
        this.entryObjects = new Array();
    }

    addComment(iniComment) {
        if (checkObjectNull(this.comments)) {
            this.comments = new Array();
        }
        this.comments.push(iniComment);
    }

    addComments(comments) {
        if (checkArrayEmpty(comments)) {
            return;
        }
        if (checkArrayNull(this.comments)) {
            this.comments = new Array();
        }
        comments.forEach((item, index) => {
            this.comments.push(item);
        });
    }

    getComments() {
        return this.comments;
    }

    addEntryObject(entryObject) {
        if (checkArrayNull(this.entryObjects)) {
            this.entryObjects = new Array();
        }
        this.entryObjects.push(entryObject);
    }

    getName() {
        return this.iniSectionHeader.sectionName;
    }

    setSectionHeader(sectionHeader) {
        this.iniSectionHeader = sectionHeader;
    }

    getSectionHeader() {
        return this.iniSectionHeader;
    }

    generateContentLines() {
        let lines = new Array();
        if (!checkArrayNull(this.comments)) {
            this.comments.forEach((item, index) => {
                lines.push(item);
            });
        }
        if (!checkObjectNull(this.iniSectionHeader)) {
            lines.push(this.iniSectionHeader);
        }
        if (!checkArrayNull(this.entryObjects)) {
            this.entryObjects.forEach((iniEntryObject) => {
                if (iniEntryObject !== null) {
                    let entryLines = iniEntryObject.generateContentLines();
                    if (entryLines !== null && entryLines.length > 0) {
                        entryLines.forEach((item, index) => {
                            lines.push(item);
                        });
                    }
                }
            });
        }
        return lines;
    }
}

exports.INISectionObject = INISectionObject;
