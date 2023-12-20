const {
    checkObjectNull,
    checkArrayEmpty,
    checkStringEmpty,
    StringBuilder,
} = require("../util/iniutil.js");

class INIObject {
    constructor() {
        this.sectionsMap = new Map();
        this.orderedSectionsName = new Array();
    }

    addSection(sectionObject) {
        this.orderedSectionsName.push(sectionObject.getName());
        this.sectionsMap.set(sectionObject.getName(), sectionObject);
    }

    getSection(sectionName) {
        if (checkStringEmpty(sectionName)) {
            return null;
        }
        return this.sectionsMap.get(sectionName);
    }

    getSectionsMap() {
        return this.sectionsMap;
    }

    getOrderedSectionsName() {
        return this.orderedSectionsName;
    }

    static compareINIContent(a, b) {
        if (checkObjectNull(a)) {
            return 1;
        }
        if (checkObjectNull(b)) {
            return -1;
        }

        let iniPositionA = a.getPosition();
        let iniPositionB = b.getPosition();

        // 将 position 为空的元素排到最后
        if (checkObjectNull(iniPositionA)) {
            return 1;
        }
        if (checkObjectNull(iniPositionB)) {
            return -1;
        }
        let lineNumber = iniPositionA.lineNumber - iniPositionB.lineNumber;
        if (lineNumber != 0) {
            return lineNumber;
        }
        return iniPositionA.charBegin - iniPositionB.charBegin;
    }

    generateStringLines() {
        let iniContentLines = new Array();
        this.orderedSectionsName.forEach((sectionName) => {
            if (
                !checkObjectNull(sectionName) &&
                this.sectionsMap.has(sectionName)
            ) {
                let iniSectionObject = this.sectionsMap.get(sectionName);
                let oneSectionLines = iniSectionObject.generateContentLines();
                if (!checkArrayEmpty(oneSectionLines)) {
                    oneSectionLines.forEach((item, index) => {
                        iniContentLines.push(item);
                    });
                }
            }
        });

        // 排序  先 line number，后 start position
        iniContentLines.sort(INIObject.compareINIContent);

        let stringLines = new Array();
        let sbOneLine = new StringBuilder();
        let preLineNumber = -1;
        let curLineNumber = -1;

        for (let iiniContent of iniContentLines) {
            if (checkObjectNull(iiniContent)) {
                continue;
            }
            let curINIPosition = iiniContent.getPosition();
            if (checkObjectNull(curINIPosition)) {
                if (sbOneLine.length() > 0) {
                    stringLines.push(sbOneLine.toString());
                    sbOneLine.clear();
                }
                stringLines.push(iiniContent.toINIOutputString());
                continue;
            }

            curLineNumber = curINIPosition.lineNumber;
            if (preLineNumber != curLineNumber) {
                if (preLineNumber > -1) {
                    stringLines.push(sbOneLine.toString());
                    sbOneLine.clear();
                }

                let lineDelta = curLineNumber - preLineNumber;
                if (lineDelta > 1) {
                    // 中间有空行
                    for (let i = 0; i < lineDelta - 1; i++) {
                        stringLines.push("");
                    }
                }
                sbOneLine.append(iiniContent.toINIOutputString());
            } else {
                sbOneLine.append(iiniContent.toINIOutputString());
            }
            preLineNumber = curLineNumber;
        }
        stringLines.push(sbOneLine.toString());
        return stringLines;
    }

    toString() {
        function replacer(key, value) {
            if (value instanceof Map) {
                return {
                    dataType: "Map",
                    value: Array.from(value.entries()),
                };
            } else {
                return value;
            }
        }
        return JSON.stringify(this, replacer, 2);
    }
}

exports.INIObject = INIObject;
