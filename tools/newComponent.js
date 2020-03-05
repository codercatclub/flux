"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var commander_1 = require("commander");
var program = new commander_1["default"].Command();
var name = process.argv[process.argv.length - 1];
if (!name) {
    console.log('Usage: newComponent <name>');
    process.exit(1);
}
program
    .option('-s, --style', 'create style file')
    .parse(process.argv);
var componentSnippet = "\nimport s from './index.module.css';\n\nconst " + name + " = () => (\n  <div className={s.container}></div>\n);\n\nexport default " + name + ";\n";
var styleSnippet = "";
var dir = "./src/components/" + name;
if (!fs_1.existsSync(dir)) {
    fs_1.mkdirSync(dir);
}
var componentFile = dir + "/index.tsx";
fs_1.writeFile(componentFile, componentSnippet, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(componentFile + " created");
});
if (program.style) {
    var styleFile_1 = dir + "/index.module.css";
    fs_1.writeFile(styleFile_1, styleSnippet, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(styleFile_1 + " created");
    });
}
