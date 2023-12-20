/**
 * INIPosition class
 * @class
 */
class INIPosition {
    /**
     * Constructs the INIPosition class
     * @param {string} fileLocation ini file location
     * @param {number} lineNumber
     * @param {number} charBegin
     * @param {number} charEnd
     * @constructor
     */
    constructor(fileLocation, lineNumber, charBegin, charEnd) {
        this.fileLocation = fileLocation;
        this.lineNumber = lineNumber;
        this.charBegin = charBegin;
        this.charEnd = charEnd;
    }
}

exports.INIPosition = INIPosition;
