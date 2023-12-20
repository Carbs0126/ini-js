const fs = require("fs");
const { checkObjectNull, checkArrayEmpty } = require("./util/iniutil");

class INIFileGenerator {
    static async generateFileFromINIObject(iniObject, fileAbsolutePath) {
        if (checkObjectNull(iniObject)) {
            throw new Error("IniObject should not be null");
        }
        let lines = iniObject.generateStringLines();
        if (checkArrayEmpty(lines)) {
            return -1;
        }
        return await INIFileGenerator.writeFile(lines, fileAbsolutePath);
    }

    static async writeFile(lines, fileAbsolutePath) {
        const writeStream = fs.createWriteStream(fileAbsolutePath);
        let linesMaxIndex = lines.length - 1;
        lines.forEach((line, index) => {
            if (index < linesMaxIndex) {
                writeStream.write(line + "\n");
            } else {
                writeStream.write(line);
            }
        });

        writeStream.end();
        writeStream.on("finish", () => {});
        writeStream.on("error", (err) => {
            console.error(
                "Error occurred when writing data into ini file.",
                err
            );
        });
        return 0;
    }
}

exports.INIFileGenerator = INIFileGenerator;
