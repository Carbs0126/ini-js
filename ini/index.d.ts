import { INIObject } from "./ini";

declare const ini: {
    INIFileParser: {
        parseFileToINIObject: (iniFilePath: string) => Promise<INIObject>;
    };
    INIFileGenerator: {
        generateFileFromINIObject: (
            iniObject: INIObject,
            fileAbsolutePath: string
        ) => Promise<number>;
    };
};

export = ini;
